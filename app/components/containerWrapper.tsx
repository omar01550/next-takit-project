import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const ContainerWrapper = ({children,className}:{children:ReactNode,className?:string}) => {
  return (
    <section className={cn("containerWrapper w-full px-4 md:px-16 ",className)}>
          {children}        
    </section>
  )
}

export default ContainerWrapper