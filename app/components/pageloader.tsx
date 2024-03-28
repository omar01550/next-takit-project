import { Train } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
  return (
    <div className='w-full bg-background flex justify-center items-center text-primary-100 h-96'>
           <Train className="animate-pulse text-6xl"/>
    </div>
  )
}

export default PageLoader