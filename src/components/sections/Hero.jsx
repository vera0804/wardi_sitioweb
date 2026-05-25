import { motion } from 'framer-motion'
import { HERO_STATS } from '../../data/content'
import { Icon } from '../../utils/icons'
import { Button } from '../ui/Button'

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/40 ring-1 ring-white/10"
      >
        <img
          src="/images/dashboard.png"
          alt="Panel de gestión Wardi Agrícola"
          className="w-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
      </motion.div>
      <div className="absolute -right-4 -top-4 rounded-xl border border-wardi-avocado/30 bg-wardi-avocado/20 px-3 py-2 backdrop-blur-md">
        <p className="text-xs font-semibold text-wardi-avocado-light">+24% producción</p>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-wardi-darker/95 via-wardi-dark/90 to-wardi-darker/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,179,66,0.15)_0%,_transparent_50%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-24 pt-32 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-32 lg:pt-40">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex flex-wrap gap-2"
          >
            {['Café', 'Aguacate', 'Modo offline', 'SaaS Agrícola'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                <Icon name="Sparkles" size={12} className="text-wardi-avocado-light" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Software de gestión agrícola para{' '}
            <span className="bg-gradient-to-r from-wardi-avocado-light to-wardi-avocado bg-clip-text text-transparent">
              fincas modernas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Controle producción, inventario, costos, planillas y operaciones agrícolas desde una
            sola plataforma. La mayoría de los registros funcionan{' '}
            <span className="font-medium text-wardi-avocado-light">sin conexión en finca</span> y se
            sincronizan automáticamente al volver la señal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="https://cafe.wardiagricola.com" variant="avocado" size="lg" external>
              <Icon name="Coffee" size={18} />
              Wardi Café
            </Button>
            <Button href="https://aguacate.wardiagricola.com" variant="secondary" size="lg" external>
              <Icon name="Sprout" size={18} />
              Wardi Aguacate
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-wardi-avocado-light sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <HeroDashboard />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
