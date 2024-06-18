import Logo from '@/app/components/logo'
import React from 'react'
import Title from '../components/title'
import AnalysImage  from '../images/carbon_text-link-analysis.png'
import InfoCard from '../components/infoCard'
import DatePicker from '../components/datePicker'
import ProgressCard from '../components/progressCard'

const Users = () => {
  return (

   <main className="w-full py-6 lg:py-10 px-6">
         <div className="flex justify-center items-center logo">
              <Logo/>

         </div>

<div className="flex justify-between items-center">
<Title title={'analysis'} icon={AnalysImage}/>
<DatePicker className={'w-[200px] mt-6'}/>
</div>
         

         
         <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-0  lg:justify-between py-8">
                      <InfoCard/>
                      <InfoCard/>
                      <InfoCard/>
                      
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3   lg:justify-between py-8">
          
             <div className="w-full shadow-md rounded-md flex flex-col justify-center items-start gap-2 p-8">
                  <h3 className="text-lg text-secondary-100 capitalize">
                  Most purchased
                  </h3>

                  <ProgressCard/>
                  <ProgressCard/>
                  <ProgressCard/>
                  


            </div> 


            <div className="w-full shadow-md rounded-md flex flex-col justify-center items-start gap-2 p-8">
                  <h3 className="text-lg text-secondary-100 capitalize">
                  Best Sales
                  </h3>

                  <ProgressCard/>
                  <ProgressCard/>
                  <ProgressCard/>
                  


            </div> 

     </div>



           
   </main>

)
}

export default Users


