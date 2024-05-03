"use client"


import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { ArrowBigDownDash, ArrowBigRightDashIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const Logout = () => {

    const route = useRouter();
   
  return (
   <>
     <DropdownMenuItem onClick={() => {
    document.cookie='token=undefined';
    route.refresh()

}}>
            Log out
            <DropdownMenuShortcut><ArrowBigRightDashIcon/></DropdownMenuShortcut>
          </DropdownMenuItem>
   </>    


)
}

export default Logout