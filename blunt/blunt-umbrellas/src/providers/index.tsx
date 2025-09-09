'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { MotionProvider } from './MotionProvider'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <MotionProvider>
        {children}
      </MotionProvider>
    </ThemeProvider>
  )
}


export { ThemeProvider } from './ThemeProvider'
export { MotionProvider } from './MotionProvider'