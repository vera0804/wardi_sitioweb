import { useDemoModal } from '../../context/DemoModalContext'
import { Button } from './Button'

export function DemoButton({
  size = 'md',
  variant = 'avocado',
  className = '',
  children,
  onClick: onClickExtra,
}) {
  const { openDemo } = useDemoModal()

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        openDemo()
        onClickExtra?.()
      }}
    >
      {children ?? 'Solicitar Demo'}
    </Button>
  )
}
