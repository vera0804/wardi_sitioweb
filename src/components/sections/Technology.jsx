import { TECH_FEATURES } from '../../data/content'
import { Icon } from '../../utils/icons'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

export function Technology() {
  return (
    <AnimatedSection
      id="tecnologia"
      className="relative overflow-hidden bg-wardi-darker py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,179,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,179,66,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-wardi-avocado/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full border border-wardi-avocado/30 bg-wardi-avocado/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-wardi-avocado-light">
              Tecnología
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tecnología diseñada para operaciones reales
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Infraestructura robusta, segura y pensada para el día a día en finca. La mayoría de
              las funcionalidades de registro operan{' '}
              <span className="font-medium text-wardi-avocado-light">offline</span>, ideales para
              zonas con señal limitada.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">¿Cómo funciona Wardi?</p>
              <p className="mt-1 text-xs text-white/50">
                Sin código ni complicaciones: su información fluye en tres pasos.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    icon: 'Smartphone',
                    step: '1',
                    title: 'En la finca',
                    text: 'Registre cosechas, inventario y labores sin internet. Los datos se guardan y sincronizan al reconectar.',
                  },
                  {
                    icon: 'Cloud',
                    step: '2',
                    title: 'En la nube',
                    text: 'Wardi guarda y sincroniza todo de forma segura, accesible desde cualquier lugar.',
                  },
                  {
                    icon: 'BarChart3',
                    step: '3',
                    title: 'En su oficina',
                    text: 'Consulte reportes, costos y cronogramas para decidir con datos reales.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wardi-avocado/20 text-wardi-avocado-light">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-wardi-avocado-light">
                        Paso {item.step} · {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-white/70">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-wardi-avocado/25 bg-wardi-avocado/10 px-4 py-3">
                <Icon name="WifiOff" className="mt-0.5 shrink-0 text-wardi-avocado-light" size={20} />
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-wardi-avocado-light">Modo offline:</span> la
                  mayoría de los registros de campo no requieren conexión activa.
                </p>
              </div>
            </div>
          </div>

          <StaggerContainer className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {TECH_FEATURES.map((feature) => (
              <StaggerItem key={feature.title} className="h-full">
                <article className="group flex h-full min-h-[168px] flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-wardi-avocado/30 hover:bg-white/10">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wardi-avocado/20 text-wardi-avocado-light transition group-hover:bg-wardi-avocado/30 group-hover:scale-110">
                    <Icon name={feature.icon} size={22} />
                  </div>
                  <h3 className="font-display font-semibold leading-snug text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  )
}
