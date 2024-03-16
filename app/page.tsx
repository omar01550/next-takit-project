import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className="home w-full">
      home page
      <div className="flex justify-around items-center">
            <Link href={'/metro'}>
                metro
            </Link>

            <Link href={'/train'}>
                train
            </Link>

            <Link href={'/bus'} className='bg-omar-100 text-white'>
                bus
            </Link>
      </div>
       

    </main>
  )
}

export default HomePage