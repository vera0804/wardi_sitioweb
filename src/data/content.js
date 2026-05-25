export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
]

export const HERO_STATS = [
  { value: '2+', label: 'Plataformas especializadas' },
  { value: '100%', label: 'Operaciones centralizadas' },
  { value: 'Offline', label: 'Mayoría de registros sin conexión' },
  { value: '24/7', label: 'Acceso desde cualquier lugar' },
]

export const BENEFITS = [
  {
    icon: 'Sprout',
    title: 'Producción agrícola',
    description: 'Registre cosechas, lotes y rendimientos con precisión en tiempo real.',
  },
  {
    icon: 'Package',
    title: 'Inventario técnico',
    description: 'Control de insumos, fertilizantes y materiales con alertas inteligentes.',
  },
  {
    icon: 'ScanLine',
    title: 'Trazabilidad',
    description: 'Seguimiento completo desde el campo hasta el despacho final.',
  },
  {
    icon: 'Users',
    title: 'Planillas',
    description: 'Gestión de personal, jornales y asistencia integrada a operaciones.',
  },
  {
    icon: 'BarChart3',
    title: 'Reportes y analytics',
    description: 'Dashboards con KPIs, tendencias y decisiones basadas en datos.',
  },
  {
    icon: 'Shield',
    title: 'Multiusuario y roles',
    description: 'Permisos granulares para administradores, supervisores y operarios.',
  },
  {
    icon: 'Wallet',
    title: 'Control de costos',
    description: 'Costos por lote, hectárea y ciclo productivo con visibilidad total.',
  },
  {
    icon: 'Smartphone',
    title: 'Gestión desde celular',
    description: 'Registre datos en campo con interfaz optimizada para móvil.',
  },
]

export const PROBLEMS = [
  { icon: 'FileSpreadsheet', text: 'Excel desordenado' },
  { icon: 'AlertTriangle', text: 'Inventarios incorrectos' },
  { icon: 'Unlink', text: 'Pérdida de trazabilidad' },
  { icon: 'TrendingDown', text: 'Falta de control financiero' },
  { icon: 'Clock', text: 'Procesos manuales' },
  { icon: 'Layers', text: 'Información dispersa' },
]

export const SOLUTIONS = [
  {
    id: 'cafe',
    title: 'Wardi Café',
    description: 'Plataforma especializada para fincas y operaciones cafetaleras.',
    image: '/images/plantacion_cafe.png',
    accent: 'coffee',
    href: 'https://cafe.wardiagricola.com',
    features: [
      'Control de lotes',
      'Producción cafetalera',
      'Inventario agrícola',
      'Planillas',
      'Costos de producción',
      'Reportes operativos',
    ],
    cta: 'Ingresar a Wardi Café',
  },
  {
    id: 'aguacate',
    title: 'Wardi Aguacate',
    description: 'Gestión integral para producción aguacatera moderna.',
    image: '/images/plantacion_aguacate.png',
    accent: 'avocado',
    href: 'https://aguacate.wardiagricola.com',
    features: [
      'Control de cosecha',
      'Calibres y producción',
      'Fertilización',
      'Inventario técnico',
      'Trazabilidad',
      'Costos por lote',
    ],
    cta: 'Ingresar a Wardi Aguacate',
  },
]

export const TECH_FEATURES = [
  { icon: 'Globe', title: 'Plataforma web moderna', description: 'Interfaz intuitiva y rápida en cualquier navegador.' },
  { icon: 'MonitorSmartphone', title: 'Acceso móvil y desktop', description: 'Experiencia optimizada en todos los dispositivos.' },
  {
    icon: 'WifiOff',
    title: 'Registros offline',
    description: 'Registre en finca sin internet y sincronice al reconectar.',
  },
  { icon: 'AppWindow', title: 'PWA', description: 'Instale como app en el celular para acceso rápido desde el campo.' },
  { icon: 'KeyRound', title: 'Roles y permisos', description: 'Control de acceso por perfil y departamento.' },
  { icon: 'Lock', title: 'Seguridad', description: 'Cifrado, autenticación y protección de datos.' },
  { icon: 'Cloud', title: 'Infraestructura en la nube', description: 'Escalable, confiable y siempre disponible.' },
  { icon: 'HardDrive', title: 'Respaldos automáticos', description: 'Sus datos protegidos con copias programadas.' },
  { icon: 'RefreshCw', title: 'Actualizaciones continuas', description: 'Mejoras constantes sin interrumpir operaciones.' },
]

export const FOOTER_LINKS = {
  producto: [
    { label: 'Wardi Café', href: 'https://cafe.wardiagricola.com' },
    { label: 'Wardi Aguacate', href: 'https://aguacate.wardiagricola.com' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Tecnología', href: '#tecnologia' },
  ],
  empresa: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Contacto', href: '#contacto' },
  ],
}
