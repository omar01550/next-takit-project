import Link from 'next/link'
import React, { useContext } from 'react'
import Logo from './logo'
import {TrainFront, Bus, MenuIcon, Train, TrainTrack } from 'lucide-react'
import { Button } from '@/components/ui/button'
import clearAllCookies from '../../lib/clearCookie.js';
import { cookies } from 'next/headers'
import { getUserState } from '@/lib/utils'
import { UserList } from '@/app/components/userList'
import TrainIcon from '../HomeComponents/icons/trainIcon'
import BusIcon from '../HomeComponents/icons/busIcon'
import MetroIcon from '../HomeComponents/icons/metroIcon'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const dynamic = 'force-dynamic'
const Header = () => {
   
  const allCookies = cookies();
  const token = allCookies.get("token")?.value;

const user = getUserState(token)
  return (
    <header className='flex justify-between items-center py-4 relative'>      
        <Logo/>
            <nav className='hidden lg:flex space-x-4  capitalize items-end text-secondary-100'>
                  <Link href="/train" className='text-lg font-semibold flex justify-center items-center gap-2 hover:text-primary-100 '>
                      train
                      <TrainIcon/>
                  </Link>

                  <Link href='/bus' className='text-lg font-semibold flex justify-center items-center gap-2  hover:text-primary-100'>
                      Bus
                      <BusIcon/>
                  </Link>

                  <Link href='/metro' className='text-lg font-semibold flex justify-center items-center gap-2  hover:text-primary-100'>
                      Metro
                      <MetroIcon/>
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
            <Sheet >
  <SheetTrigger className='lg:hidden'>      
          <MenuIcon className='' size={33} color='#132968'/>
  </SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            
    </header>


  )
}

export default Header