# Wardi Agrícola — Sitio web

Sitio web premium para **Wardi Agrícola**, plataforma de gestión agrícola para fincas cafetaleras y aguacateras.

## Stack

- React 18 + Vite 6
- Tailwind CSS 4
- Framer Motion
- Lucide React (iconos)

## Desarrollo

```bash
npm install
cp .env.example .env
# Edite .env con su RESEND_API_KEY y correos
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) en el navegador. El comando `dev` inicia Vite y el API en el puerto 3001.

### Solicitar Demo (Resend)

1. Cree una API key en [Resend](https://resend.com/api-keys).
2. Copie `.env.example` a `.env` y configure:

```env
RESEND_API_KEY=re_xxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=wardiagricola@gmail.com
```

3. En producción use un dominio verificado en Resend como remitente (`RESEND_FROM_EMAIL`).

El formulario envía: nombre del cliente, correo del administrador, nombre, primer apellido y segundo apellido (opcional).

## Producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, Benefits, Problems, etc.
│   └── ui/         # Button, AnimatedSection
├── data/           # Contenido estático
├── utils/          # Iconos
├── App.jsx
├── main.jsx
└── index.css
```

## Enlaces externos

- [Wardi Café](https://cafe.wardiagricola.com)
- [Wardi Aguacate](https://aguacate.wardiagricola.com)
