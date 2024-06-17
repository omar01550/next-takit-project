import ContainerWrapper from '@/app/components/containerWrapper'
import Logo from '@/app/components/logo'
import React from 'react'

import AnalystIcon from './icons/AnalystIcon'
import InfoCard from './components/infoCard'

const OwnerDashBoard = () => {
  return (
    <main className="owner-dashboard w-full">
          <ContainerWrapper className='py-3'>
                 <Logo/>
                 <header className="dashboard-header flex flex-col lg:flex-row  justify-center lg:justify-between items-center py-4 gap-4">
                        <h1 className="title flex justify-center items-center text-secondary-100 gap-2 text-2xl font-semibold">
                             <AnalystIcon/>
                             <span>Analysis</span>
                        </h1>
                        {/* <DatePicker/> */}

                 </header>

                 {/* cards */}
                 <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-0  lg:justify-between mt-16">
                      <InfoCard/>
                      <InfoCard/>
                      <InfoCard/>
                      
                 </div>
                 {/* cards */}
          </ContainerWrapper>
    </main>

)
}

export default OwnerDashBoard