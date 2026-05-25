import { motion } from 'framer-motion'
import { SOLUTIONS } from '../../data/content'
import { Icon } from '../../utils/icons'
import { Button } from '../ui/Button'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

const accentStyles = {
  coffee: {
    badge: 'bg-wardi-coffee/10 text-wardi-coffee',
    gradient: 'from-wardi-coffee/20 to-wardi-cream',
    icon: 'Coffee',
    button: 'primary',
  },
  avocado: {
    badge: 'bg-wardi-avocado/15 text-wardi-dark',
    gradient: 'from-wardi-avocado/20 to-wardi-cream',
    icon: 'Sprout',
    button: 'avocado',
  },
}

export function Solutions() {
  return (
    <AnimatedSection
      id="soluciones"
      className="relative overflow-hidden bg-gradient-to-b from-wardi-beige/50 to-wardi-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-wardi-dark/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-wardi-dark">
            Soluciones
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-wardi-soft-black sm:text-4xl lg:text-5xl">
            Plataformas especializadas para su cultivo
          </h2>
          <p className="mt-4 text-lg text-wardi-soft-black/60">
            Dos soluciones diseñadas para las necesidades específicas de café y aguacate.
          </p>
        </div>

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-2">
          {SOLUTIONS.map((solution) => {
            const style = accentStyles[solution.accent]
            return (
              <StaggerItem key={solution.id}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-wardi-dark/5 bg-white shadow-lg shadow-wardi-dark/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-wardi-dark/10"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} via-transparent to-transparent opacity-80`} />
                    <span
                      className={`absolute left-6 top-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${style.badge}`}
                    >
                      <Icon name={style.icon} size={14} />
                      Especializado
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-2xl font-bold text-wardi-soft-black">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-wardi-soft-black/60">{solution.description}</p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-wardi-soft-black/80">
                          <Icon name="Check" size={16} className="shrink-0 text-wardi-avocado" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button
                        href={solution.href}
                        variant={style.button}
                        size="lg"
                        external
                        className="w-full sm:w-auto"
                      >
                        {solution.cta}
                        <Icon name="ArrowRight" size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
