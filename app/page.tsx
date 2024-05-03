import Link from 'next/link'
import React from 'react'
import Hero from './components/hero'
import ContainerWrapper from './components/containerWrapper'
import Service from './components/service'
import ServiceBus from '@/public/images/serviceBus'
import ServiceMetro from '@/public/images/serviceMetro'
import ServiceTrain from '@/public/images/serviceTrain'
import { cookies } from 'next/headers'
export const dynamic ="force-dynamic"

const HomePage = () => {

  return (
    <main className="home w-full">
          <Hero/>

          <ContainerWrapper className='flex flex-col justify-center items-center space-y-6 py-12 lg:flex-row lg:justify-between'>
            <Link href={'/train'}>
                <Service 
                  ServiceImage={<ServiceTrain/>}
                />
            </Link>

            <Link href={'/bus'}>
                <Service 
                  ServiceImage={<ServiceBus/>}
                />
            </Link>
            <Link href={'/metro'}>
                <Service 
                    ServiceImage={<ServiceMetro/>}
                />
            </Link>
             
             
                
          </ContainerWrapper>
       

    </main>
  )
}

export default HomePage