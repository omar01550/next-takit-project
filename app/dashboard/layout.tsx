import Logo from '@/app/components/logo'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

import Link from 'next/link'
import React, { ReactNode } from 'react'


const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full flex">
    

            <aside className="sidebar w-[300px] h-screen border-e-2 border-e-secondary-100   text-white py-10 px-6 bg-[#F4ECDC] hidden lg:block">
                    <Link href={'/dashboard/users'}>
                        users
                    </Link>

                    <Link href={'/dashboard/anlysis'}>
                    anlysis
                    </Link>
                    
           </aside>

        <section className="w-full lg:w-10/12">
        {children }

        </section>
    </div>
  )
}

export default Layout