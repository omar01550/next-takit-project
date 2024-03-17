'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import Logo from './logo'
import { MenuIcon } from 'lucide-react'
import { userContext } from '@/context/app'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import clearAllCookies from '../../lib/clearCookie.js';

const Header = () => {
  const [user,setUser] = useContext(userContext)
  const route = useRouter();



  return (
    <header className='flex justify-between items-center py-4 relative'>
            <Logo/>
            <nav className='hidden lg:flex space-x-4 items-center capitalize'>
                  <Link href="/train" className='text-lg font-semibold'>
                      train
                  </Link>

                  <Link href='/buses' className='text-lg font-semibold'>
                      Buses
                  </Link>

                  <Link href='/metro' className='text-lg font-semibold'>
                      Metro
                  </Link>
            </nav>

            <>
                {user !== null?
                <Button onClick={() => {
                   
                   route.push("/")
                   clearAllCookies()
                   window.location.reload();
                }}>
                    Log out
                </Button>
                :<div className="auth-btns hidden lg:flex space-x-4 items-center capitalize">
                <Link href={'/signup'} className='rounded-md bg-blue-950 px-6 py-1 font-bold text-base border-none outline-none hover:opacity-80'>
                  create account
                </Link>

                <Link href={'/login'} className='rounded-md bg-gray-200 px-6 py-1 font-bold text-base border-none outline-none hover:opacity-80 text-blue-950'>
                  Login
                </Link>
                
         </div>
                }
            </>
            <MenuIcon className='lg:hidden'/>
    </header>


  )
}

export default Header