import { BENEFITS } from '../../data/content'
import { Icon } from '../../utils/icons'
import { Logo } from '../ui/Logo'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

export function Benefits() {
  return (
    <AnimatedSection
      id="modulos"
      className="relative overflow-hidden bg-wardi-cream py-24 lg:py-32"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-wardi-avocado/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-wardi-coffee/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8 lg:gap-16">
          <div className="min-w-0 flex-1 text-left sm:max-w-xl lg:max-w-2xl">
            <span className="inline-block rounded-full bg-wardi-dark/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-wardi-dark">
              Módulos
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-wardi-soft-black sm:text-4xl lg:text-5xl">
              Todo lo que necesita para administrar su finca
            </h2>
            <p className="mt-4 text-lg text-wardi-soft-black/60">
              Herramientas integradas para cada aspecto de su operación agrícola.
            </p>
          </div>
          <Logo
            variant="icon"
            className="h-20 w-auto shrink-0 sm:h-32 lg:h-40"
          />
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <article className="group relative h-full rounded-2xl border border-wardi-dark/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-wardi-avocado/20 hover:shadow-xl hover:shadow-wardi-dark/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-wardi-dark to-wardi-avocado text-white transition group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-wardi-avocado/20">
                  <Icon name={benefit.icon} size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-wardi-soft-black">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wardi-soft-black/60">
                  {benefit.description}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-gradient-to-r from-wardi-avocado to-wardi-dark transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
