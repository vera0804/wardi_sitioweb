import { FOOTER_LINKS } from '../../data/content'
import { Icon } from '../../utils/icons'
import { Logo } from '../ui/Logo'

const SOCIAL = [
  { name: 'Linkedin', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-wardi-darker text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-block transition-opacity hover:opacity-90">
              <Logo theme="dark" variant="full" size="lg" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Plataforma de gestión agrícola para fincas cafetaleras y aguacateras modernas.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition hover:bg-wardi-avocado/20 hover:text-wardi-avocado-light"
                  aria-label={social.name}
                >
                  <Icon name={social.name} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Producto
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-wardi-avocado-light"
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Empresa
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-wardi-avocado-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Contacto
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Icon name="Mail" size={18} className="mt-0.5 shrink-0 text-wardi-avocado-light" />
                <a href="mailto:wardiagricola@gmail.com" className="hover:text-white">
                  wardiagricola@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Icon name="Phone" size={18} className="mt-0.5 shrink-0 text-wardi-avocado-light" />
                <a href="tel:+50687833713" className="hover:text-white">
                  +506 8783 3713
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Icon name="MapPin" size={18} className="mt-0.5 shrink-0 text-wardi-avocado-light" />
                <span>Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Wardi Agrícola. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30">
            Gestión agrícola inteligente · Café & Aguacate
          </p>
        </div>
      </div>
    </footer>
  )
}
