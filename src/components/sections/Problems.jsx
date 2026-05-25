import { motion } from 'framer-motion'
import { PROBLEMS } from '../../data/content'
import { Icon } from '../../utils/icons'
import { Logo } from '../ui/Logo'
import { AnimatedSection } from '../ui/AnimatedSection'

export function Problems() {
  return (
    <AnimatedSection className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-700">
              El problema
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-wardi-soft-black sm:text-4xl">
              Deje atrás el control manual
            </h2>
            <p className="mt-4 text-lg text-wardi-soft-black/60">
              Los métodos tradicionales generan errores, pérdidas y decisiones sin datos
              confiables.
            </p>

            <div className="mt-10 space-y-4">
              {PROBLEMS.map((problem, i) => (
                <motion.div
                  key={problem.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-red-100 bg-red-50/50 px-5 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <Icon name={problem.icon} size={20} />
                  </span>
                  <span className="font-medium text-wardi-soft-black">{problem.text}</span>
                  <Icon name="X" className="ml-auto shrink-0 text-red-400" size={18} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-wardi-avocado/20 to-wardi-dark/20 blur-2xl" />
            <div className="relative rounded-3xl border border-wardi-avocado/20 bg-gradient-to-br from-wardi-dark to-wardi-darker p-8 shadow-2xl lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <Logo theme="dark" variant="icon" size="lg" />
                <div>
                  <p className="font-display text-lg font-bold text-white">Wardi centraliza todo</p>
                  <p className="text-sm text-white/60">Una plataforma, control total</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Datos unificados en tiempo real',
                  'Trazabilidad de punta a punta',
                  'Reportes automáticos y precisos',
                  'Control financiero por lote',
                  'Acceso multiusuario seguro',
                  'Operaciones desde el campo',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wardi-avocado/30">
                      <Icon name="Check" className="text-wardi-avocado-light" size={16} />
                    </span>
                    <span className="text-sm font-medium text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
                {[
                  { label: 'Eficiencia', value: '+40%' },
                  { label: 'Errores', value: '-65%' },
                  { label: 'Tiempo', value: '-50%' },
                ].map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="font-display text-xl font-bold text-wardi-avocado-light">
                      {metric.value}
                    </p>
                    <p className="text-xs text-white/50">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
