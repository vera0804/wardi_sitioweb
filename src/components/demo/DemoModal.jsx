import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '../../utils/icons'

const INITIAL = {
  clientName: '',
  adminEmail: '',
  firstName: '',
  firstLastName: '',
  secondLastName: '',
}

export function DemoModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleClose = () => {
    if (status === 'loading') return
    onClose()
    setTimeout(() => {
      setForm(INITIAL)
      setStatus('idle')
      setErrorMsg('')
    }, 300)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        const msg = [data.error, data.detail, data.hint].filter(Boolean).join(' ')
        throw new Error(msg || 'No se pudo enviar la solicitud.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Error al enviar. Intente de nuevo.')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-wardi-darker/80 backdrop-blur-sm"
            onClick={handleClose}
            aria-label="Cerrar"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-wardi-dark/10 bg-white shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-wardi-dark/5 bg-white px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-wardi-avocado">
                  Solicitar demo
                </p>
                <h2 id="demo-modal-title" className="font-display text-xl font-bold text-wardi-soft-black">
                  Cuéntenos sobre su finca
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-wardi-soft-black/50 transition hover:bg-wardi-cream hover:text-wardi-dark"
                aria-label="Cerrar formulario"
              >
                <Icon name="Close" size={22} />
              </button>
            </div>

            {status === 'success' ? (
              <div className="px-6 py-12 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-wardi-avocado/15 text-wardi-avocado">
                  <Icon name="Check" size={28} />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-wardi-soft-black">
                  Solicitud enviada
                </h3>
                <p className="mt-2 text-sm text-wardi-soft-black/60">
                  Recibimos su información. Nos comunicaremos pronto al correo indicado.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-8 rounded-full bg-wardi-dark px-8 py-3 text-sm font-medium text-white transition hover:bg-wardi-darker"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
                <Field
                  label="Nombre del cliente"
                  hint="Empresa, finca u organización"
                  id="clientName"
                  value={form.clientName}
                  onChange={update('clientName')}
                  required
                />
                <Field
                  label="Correo del administrador"
                  id="adminEmail"
                  type="email"
                  value={form.adminEmail}
                  onChange={update('adminEmail')}
                  required
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nombre"
                    id="firstName"
                    value={form.firstName}
                    onChange={update('firstName')}
                    required
                  />
                  <Field
                    label="Primer apellido"
                    id="firstLastName"
                    value={form.firstLastName}
                    onChange={update('firstLastName')}
                    required
                  />
                </div>
                <Field
                  label="Segundo apellido"
                  id="secondLastName"
                  value={form.secondLastName}
                  onChange={update('secondLastName')}
                  optional
                />

                {status === 'error' && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-wardi-dark py-3.5 text-sm font-semibold text-white transition hover:bg-wardi-darker disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Icon name="ChevronRight" size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, hint, id, optional, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-wardi-soft-black">
        {label}
        {optional && <span className="font-normal text-wardi-soft-black/40"> (opcional)</span>}
      </label>
      {hint && <p className="mt-0.5 text-xs text-wardi-soft-black/45">{hint}</p>}
      <input
        id={id}
        className="mt-1.5 w-full rounded-xl border border-wardi-dark/10 bg-wardi-cream/50 px-4 py-3 text-sm text-wardi-soft-black outline-none transition placeholder:text-wardi-soft-black/35 focus:border-wardi-avocado focus:ring-2 focus:ring-wardi-avocado/20"
        {...props}
      />
    </div>
  )
}
