import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { Resend } from 'resend'

const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '..', '.env') })

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const apiKey = process.env.RESEND_API_KEY?.trim()
const resend = apiKey ? new Resend(apiKey) : null

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

app.post('/api/demo', async (req, res) => {
  try {
    if (!resend) {
      return res.status(500).json({
        error: 'Servidor sin configurar. Agregue RESEND_API_KEY en el archivo .env',
      })
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim()
    const toEmail = process.env.RESEND_TO_EMAIL?.trim() || 'wardiagricola@gmail.com'

    if (!fromEmail) {
      return res.status(500).json({
        error: 'Configure RESEND_FROM_EMAIL en el archivo .env',
      })
    }

    const {
      clientName,
      adminEmail,
      firstName,
      firstLastName,
      secondLastName = '',
      crop,
    } = req.body

    const cropLabels = { cafe: 'Café', aguacate: 'Aguacate' }
    const cropValue = crop?.trim().toLowerCase()

    if (!clientName?.trim()) {
      return res.status(400).json({ error: 'El nombre del cliente es obligatorio.' })
    }
    if (!adminEmail?.trim() || !isValidEmail(adminEmail)) {
      return res.status(400).json({ error: 'Ingrese un correo de administrador válido.' })
    }
    if (!firstName?.trim()) {
      return res.status(400).json({ error: 'El nombre es obligatorio.' })
    }
    if (!firstLastName?.trim()) {
      return res.status(400).json({ error: 'El primer apellido es obligatorio.' })
    }
    if (!cropValue || !cropLabels[cropValue]) {
      return res.status(400).json({ error: 'Seleccione un cultivo válido: Café o Aguacate.' })
    }

    const contactName = [firstName, firstLastName, secondLastName]
      .map((s) => s?.trim())
      .filter(Boolean)
      .join(' ')

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: adminEmail.trim(),
      subject: `Solicitud de demo — ${clientName.trim()}`,
      html: `
        <h2>Nueva solicitud de demo — Wardi Agrícola</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Cliente / Finca / Organización</td><td style="padding:8px 0;">${escapeHtml(clientName.trim())}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Cultivo</td><td style="padding:8px 0;">${escapeHtml(cropLabels[cropValue])}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Correo del administrador</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(adminEmail.trim())}">${escapeHtml(adminEmail.trim())}</a></td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Nombre completo</td><td style="padding:8px 0;">${escapeHtml(contactName)}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Nombre</td><td style="padding:8px 0;">${escapeHtml(firstName.trim())}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Primer apellido</td><td style="padding:8px 0;">${escapeHtml(firstLastName.trim())}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Segundo apellido</td><td style="padding:8px 0;">${secondLastName?.trim() ? escapeHtml(secondLastName.trim()) : '—'}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      const detail = error.message || JSON.stringify(error)
      return res.status(500).json({
        error: 'No se pudo enviar el correo con Resend.',
        detail,
        hint:
          'Verifique en Resend que el dominio de RESEND_FROM_EMAIL esté verificado. Para pruebas use: onboarding@resend.dev',
      })
    }

    return res.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Demo API error:', err)
    return res.status(500).json({ error: 'Error interno del servidor.' })
  }
})

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    resendConfigured: Boolean(apiKey),
  })
})

app.listen(PORT, () => {
  console.log(`API Wardi escuchando en http://localhost:${PORT}`)
  if (!apiKey) {
    console.warn('⚠ RESEND_API_KEY no detectada. Revise el archivo .env en la raíz del proyecto.')
  } else {
    console.log('✓ Resend configurado')
    console.log(`  FROM: ${process.env.RESEND_FROM_EMAIL?.trim() || '(no definido)'}`)
    console.log(`  TO:   ${process.env.RESEND_TO_EMAIL?.trim() || 'wardiagricola@gmail.com'}`)
  }
})
