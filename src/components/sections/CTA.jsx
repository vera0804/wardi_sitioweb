import { motion } from 'framer-motion'
import { Icon } from '../../utils/icons'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { DemoButton } from '../ui/DemoButton'
import { AnimatedSection } from '../ui/AnimatedSection'

export function CTA() {
  return (
    <AnimatedSection
      id="contacto"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-wardi-dark via-wardi-darker to-wardi-dark px-8 py-16 text-center shadow-2xl shadow-wardi-dark/30 sm:px-16 lg:py-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,179,66,0.25)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(166,124,82,0.15)_0%,transparent_50%)]" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-wardi-avocado/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-wardi-coffee-soft/10 blur-3xl" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-6 flex justify-center"
            >
              <Logo theme="dark" variant="icon" size="2xl" />
            </motion.div>

            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Modernice la administración de su finca
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Digitalice sus operaciones agrícolas con Wardi.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DemoButton variant="avocado" size="lg">
                Solicitar Demo
                <Icon name="ChevronRight" size={18} />
              </DemoButton>
              <Button
                href="https://wa.me/50687833713"
                variant="cream"
                size="lg"
                external
              >
                Contactar
              </Button>
            </div>

            <p className="mt-8 text-sm text-white/40">
              Respuesta en menos de 24 horas · Sin compromiso
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
