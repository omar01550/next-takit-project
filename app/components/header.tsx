import Link from 'next/link'
import React, { useContext } from 'react'
import Logo from './logo'
import {TrainFront, Bus, MenuIcon, Train, TrainTrack } from 'lucide-react'
import { Button } from '@/components/ui/button'
import clearAllCookies from '../../lib/clearCookie.js';
import { cookies } from 'next/headers'
import { getUserState } from '@/lib/utils'
import { UserList } from '@/app/components/userList'

export const dynamic = 'force-dynamic'
const Header = () => {
   
  const allCookies = cookies();
  const token = allCookies.get("token")?.value;

const user = getUserState(token)
  return (
    <header className='flex justify-between items-center py-4 relative'>      
        <Logo/>
            <nav className='hidden lg:flex space-x-4  capitalize items-end'>
                  <Link href="/train" className='text-lg font-semibold flex justify-center items-center gap-2 hover:text-primary-100'>
                      train
                      <Train/>
                  </Link>

                  <Link href='/buses' className='text-lg font-semibold flex justify-center items-center gap-2  hover:text-primary-100'>
                      Buses
                      <Bus />
                  </Link>

                  <Link href='/metro' className='text-lg font-semibold flex justify-center items-center gap-2  hover:text-primary-100'>
                      Metro
                      <TrainFront/>
                  </Link>
            </nav>

            <>
                {user !== null?
                    <UserList/>

                 
                :<div className="auth-btns hidden lg:flex space-x-4 items-center capitalize">
                <Link href={'/signup'} className='rounded-md bg-secondary-100 px-6 py-1 font-bold text-base border-none outline-none hover:opacity-80'>
                  create account
                </Link>

                <Link href={'/login'} className='rounded-md bg-gray-200 px-6 py-1 font-bold text-base border-none outline-none hover:opacity-80 text-secondary-100'>
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