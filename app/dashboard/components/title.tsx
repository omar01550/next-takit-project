import Image from 'next/image'
import React from 'react'

const Title = ({title,icon}) => {
  return (
      <div className="mt-6 flex justify-start items-center gap-2 textlg md:text-3xl text-secondary-100 capitalize">
           <Image src={icon} alt='not found image'/>
           <h2 className="font-semibold">{title}</h2>
      </div>
)
}

export default Title