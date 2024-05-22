import React from 'react'
import CircleChart from './components/circle';
import ContainerWrapper from '@/app/components/containerWrapper';
import DatePicker from './components/datePicker';
import InfoCard from './components/infoCard';
import InfoCardLine from './components/lineChart';
import HorizontalBarChart from './components/horizontalBar';



const Info = {
      tickets:{
                total:200,
                sailed:150,
      },
      users:{
         count:20000,
         forgin:2000,
         
      }
    }



const OwnerDashBaord = () => {

  



  return (
      <main className="w-full py-8">
           <ContainerWrapper>
                <h1 className="text-start text-secondary-100 capitalize font-semibold text-3xl">
                        Dashboard
                </h1>

                <div className="flex justify-end items-center py-4">
                       <DatePicker/>
                </div>

                <div className="card flex justify-between items-center flex-wrap py-14 space-y-4 lg:space-y-0">
                      <InfoCard/>
                      <InfoCard/>
                      <InfoCard/>
                      <InfoCard/>
                </div>
                <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-2 ">
                        <div className="border-[1px] border-black border-solid rounded-md w-full h-[200px]">
                                    <CircleChart/>
                        </div>
                        
                        <div className="border-[1px] border-black border-solid rounded-md w-full bg-secondary-100 h-[200px] p-4 text-white">
                                    <div className="flex justify-between items-center ">
                                        <h3 className="text-xl capitalize font-semibold">
                                            ticket sold today
                                        </h3>
                                        <h3 className="text-xl capitalize font-semibold">
                                            70%
                                        </h3>
                                    </div>

                                    <h3 className="text-start text-xl mt-2">
                                        455.00 Pcs
                                    </h3>
                                    <HorizontalBarChart/>
                                    
                        </div>
                </div>


                    

           </ContainerWrapper>
           
           
          
           
      </main>
  )
}

export default OwnerDashBaord





