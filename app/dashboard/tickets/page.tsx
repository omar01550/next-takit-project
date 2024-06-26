import Logo from '@/app/components/logo'
import React from 'react'
import Title from '../components/title'
import TicketImage from '../images/icon-park-outline_add-print.png'
import SearchBar from '../components/searchBar'
import { TableDemo } from '../components/table'

const Users = () => {
  return (

   <main className="w-full py-6 lg:py-10 px-6">
         <div className="flex justify-center items-center logo">
              <Logo/>

         </div>

         {/* page title */}
             <Title title={'tickets'} icon={TicketImage}/>
         {/* page title */}
         <SearchBar/>
         <TableDemo/>


   </main>

)
}

export default Users