import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'

export function DashboardPreview() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-wardi-cream/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-wardi-dark/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-wardi-dark">
            Vista previa
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-wardi-soft-black sm:text-4xl">
            Cronogramas que organizan su operación
          </h2>
          <p className="mt-4 text-lg text-wardi-soft-black/60">
            Planifique labores, cosechas y actividades agrícolas en un calendario visual. Asigne
            tareas, fechas y responsables para mantener su finca siempre al día.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <div className="overflow-hidden rounded-3xl border border-wardi-dark/10 bg-wardi-cream shadow-2xl shadow-wardi-dark/10">
            <div className="flex items-center gap-2 border-b border-wardi-dark/5 bg-white px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-wardi-avocado" />
              <span className="ml-4 text-sm font-medium text-wardi-soft-black/50">
                wardi.wardiagricola.com/cronograma
              </span>
            </div>

            <img
              src="/images/cronograma.png"
              alt="Cronograma de actividades agrícolas en Wardi"
              className="w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
