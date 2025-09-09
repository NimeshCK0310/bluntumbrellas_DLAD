'use client'

import { LazyMotion, domMax } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionProviderProps {
  children: ReactNode
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  )
}