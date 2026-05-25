const ASSETS = {
  dark: {
    full: '/images/logotransparente.png',
    icon: '/images/logosinnombretransparente.png',
  },
  light: {
    full: '/images/FONDO BLANCO 1.png',
    icon: '/images/logosinnombretransparente.png',
  },
}

const HEIGHT = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
  '2xl': 'h-16',
}

export function Logo({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
  showWordmark = true,
}) {
  const assets = ASSETS[theme] ?? ASSETS.dark
  const src = variant === 'icon' ? assets.icon : assets.full
  const alt =
    variant === 'icon' ? 'Wardi Agrícola' : 'Wardi Agrícola — Gestión agrícola'
  const sizeClass = className.includes('h-') ? '' : HEIGHT[size]

  if (variant === 'icon') {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-auto object-contain ${sizeClass} ${className}`}
        width={48}
        height={48}
        decoding="async"
      />
    )
  }

  if (showWordmark) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-auto object-contain object-left ${sizeClass} ${className}`}
        width={240}
        height={64}
        decoding="async"
      />
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={assets.icon}
        alt=""
        aria-hidden
        className={`w-auto shrink-0 object-contain ${HEIGHT[size]}`}
        width={40}
        height={40}
        decoding="async"
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display text-sm font-bold tracking-wider ${
            theme === 'dark' ? 'text-white' : 'text-wardi-dark'
          }`}
        >
          WARDI
        </span>
        <span
          className={`text-[10px] font-medium tracking-[0.2em] ${
            theme === 'dark' ? 'text-wardi-avocado-light' : 'text-wardi-avocado'
          }`}
        >
          AGRÍCOLA
        </span>
      </div>
    </div>
  )
}
