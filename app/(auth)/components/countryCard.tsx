import React from 'react'

const CounteyCard = ({image}) => {
  return (
    <div className="w-[200px] h-[200px] flex justify-center items-center rounded-md bg-gray-200">
         {image}
    </div>
  )
}

export default CounteyCard