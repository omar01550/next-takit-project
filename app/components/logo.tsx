

import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
     <Link href="/" className='capitalize text-4xl font-bold text-blue-950'>
          tak<span className='text-red-500'>it</span>
     </Link>
  )
  
}

export default Logo