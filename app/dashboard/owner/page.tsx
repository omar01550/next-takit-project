import React from 'react'
import CircleChart from './components/circle';
import ContainerWrapper from '@/app/components/containerWrapper';
import DatePicker from './components/datePicker';
import InfoCard from './components/infoCard';
import InfoCardLine from './components/lineChart';
import HorizontalBarChart from './components/horizontalBar';





const OwnerDashBaord = async () => {

  const res = await fetch("http://localhost:3000/api/dashboard/owner?date=2024-05-01",{cache:"no-cache"})
  const {data} = await res.json();
  let totalUsers = 0;
  let tottalTickets =0;
  let totalSail =0;

  for(let i=0;i<data.length;i++){
     totalUsers+=data[i].LocalUsers+data[i].ForeignUsers;
     tottalTickets+=data[i].TotalTickets;
     totalSail+=data[0].TicketsSold;
  }

  console.log(totalSail,totalUsers,tottalTickets);
  
  
  


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
                      <InfoCard 
                         title={'Users'}
                         count={3000}
                      />

<InfoCard 
                         title={'Sails'}
                         count={500}
                      />

<InfoCard 
                         title={'Tickets'}
                         count={5000}
                      />

<InfoCard 
                         title={"Revenue"}
                         count={3000}
                      />
                      
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





