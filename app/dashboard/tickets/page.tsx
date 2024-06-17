import Logo from '@/app/components/logo'
import React from 'react'
import Title from '../components/title'
import UsersImage from '../images/list-pointers.png'
import SearchBar from '../components/searchBar'

const Users = () => {
  return (

   <main className="w-full py-6 lg:py-10 px-6">
         <div className="flex justify-center items-center logo">
              <Logo/>

         </div>

         {/* page title */}
             <Title title={'users'} icon={UsersImage}/>
         {/* page title */}
         <SearchBar/>

   </main>

)
}

export default Users