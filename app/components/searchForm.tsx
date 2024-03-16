
import React from 'react'
import SearchInput from './searchInput'
import SelectInput from './selectInput'
import { SearchIcon } from 'lucide-react'

const SearchForm = () => {
  return (
    <div className="-translate-y-8 flex justify-center items-center w-full">
        <form action="" className='w-8/12 p-2 flex-col lg:flex-row flex space-y-6 justify-center lg:justify-around items-center lg:items-start space-x-4'>
             <SearchInput placeholder={'from'}/>
             <SearchInput placeholder={'to'}/>
             <SearchInput placeholder={'add return'}/>
             <SelectInput/>
             <button className='flex justify-center items-center space-x-3 bg-red-500 p-1 rounded-md text-white'>
             
                 <span className='text-lg'>search</span>
                 <SearchIcon className='text-base'/>
             </button>
             

        </form>
         
    </div>
  )
}

export default SearchForm
