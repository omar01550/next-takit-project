import Image from 'next/image'
import React from 'react';


const FeatureCard = ({icon,title,des}) => {
  return (
   <div className="flex flex-col justify-center items-center gap-3 capitalize border-2 border-solid border-secondary-100 rounded-md p-3 w-full mt-8 lg:mt-0 md:w-[250px] h-[300px]">
        {icon}
        <h3 className="text-3xl text-primary-100 font-bold">{title}</h3>
        <p className="text-base text-secondary-100 text-center">
            {des}
        </p>
        
   </div>

)
}

export default FeatureCard