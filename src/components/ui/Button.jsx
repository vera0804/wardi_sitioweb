import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-wardi-dark text-white hover:bg-wardi-darker shadow-lg shadow-wardi-dark/20',
  secondary:
    'bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm',
  outline:
    'bg-transparent text-wardi-dark border-2 border-wardi-dark hover:bg-wardi-dark hover:text-white',
  avocado:
    'bg-wardi-avocado text-wardi-darker hover:bg-wardi-avocado-light shadow-lg shadow-wardi-avocado/25',
  cream:
    'bg-wardi-cream text-wardi-dark hover:bg-white shadow-lg shadow-black/10',
  ghost:
    'bg-transparent text-wardi-dark hover:bg-wardi-dark/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  external,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} onClick={onClick} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
