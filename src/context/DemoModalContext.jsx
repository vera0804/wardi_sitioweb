import { createContext, useContext, useState, useCallback } from 'react'
import { DemoModal } from '../components/demo/DemoModal'

const DemoModalContext = createContext(null)

export function DemoModalProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openDemo = useCallback(() => setOpen(true), [])
  const closeDemo = useCallback(() => setOpen(false), [])

  return (
    <DemoModalContext.Provider value={{ open, openDemo, closeDemo }}>
      {children}
      <DemoModal open={open} onClose={closeDemo} />
    </DemoModalContext.Provider>
  )
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext)
  if (!ctx) {
    throw new Error('useDemoModal debe usarse dentro de DemoModalProvider')
  }
  return ctx
}
