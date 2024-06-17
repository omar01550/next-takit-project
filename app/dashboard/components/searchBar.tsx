import Image from 'next/image'
import React from 'react'
import SearchImage from '../images/search.png'
import DatePicker from './datePicker'

const SearchBar = () => {
  return (
  <header className="searchBar flex justify-between items-center mt-6">
       <form action="" className="flex justify-start items-center gap-3">
           <div className="input-container w-[350px] border-primary-100 border-solid border-2 rounded-full flex justify-start items-center p-[6px]">
           <Image src={SearchImage} alt="not found image"/>
           <input className='text-xl w-full border-none outline-none'/>
           <Image src={SearchImage} alt="not found image"/>

             </div>
           <button className="search-btn text-primary-100 text-lg px-5 py-[6px] rounded-full font-semibold border-2 border-solid border-primary-100 flex justify-center items-center gap-2">
                Search     
                <Image src={SearchImage} alt="not found image"/>
           </button>
       </form>

       <DatePicker className={'w-[4/12]'}/>

       
  </header>

)
}

export default SearchBar