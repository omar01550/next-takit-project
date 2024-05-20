'use client'


import React from 'react'



const ProgressBar = () => {
  return (
     <div className="w-full h-[20px] bg-gray-600 rounded-md mt-8 relative">
            <div className="value absolute w-[70%] h-[100%] bg-primary-100 rounded-md left-0 top-0"></div>
     </div>
  )
}

export default ProgressBar