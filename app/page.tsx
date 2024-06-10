import Link from 'next/link'
import React from 'react'
import Hero from './components/hero'
import ContainerWrapper from './components/containerWrapper'
import Service from './components/service'
// import ServiceBus from '@/public/images/serviceBus'
import TrainServiceImage from './images/train&ticketsvg fill-min.png';
import metroServiceImage from './images/metro&ticketsvg fill-min.png';
import BusServiceImage from './images/bus&ticket.svg-min.png'
// import ServiceTrain from '@/public/images/serviceTrain'
import { cookies } from 'next/headers'
import Image from 'next/image'
export const dynamic ="force-dynamic"
import GruopImage from './images/Group discussion-rafiki 2 (1)-min.png'
import { group } from 'console'
import ServiceMetro from '@/public/images/serviceMetro'

const HomePage = () => {

  return (
    <main className="home w-full">

          <Hero/>

          {/* <div className="flex justify-center items-center gap-3 flex-col">
          <h3 className="text-secondary-100 font-semibold cpitlize text-3xl">
               All your Tickets options in one place
          </h3>


               <Image src={GruopImage } alt="not fount image" className=''/>
          </div> */}

          <ContainerWrapper className='flex flex-col justify-center items-center space-y-6 py-12 lg:flex-row lg:justify-between'>
            <Link href={'/train'}>
                <Service 
                  ServiceImage={TrainServiceImage}
                  title={"Train"}
                />
            </Link>

            <Link href={'/bus'}>
                <Service 
                  ServiceImage={BusServiceImage}
                  title={"Bus"}
                />
            </Link>
            <Link href={'/metro'}>
                <Service 
                    ServiceImage={metroServiceImage}
                    title={"Metro"}
                />
            </Link>
             
             
                
          </ContainerWrapper>
       

    </main>
  )
}

export default HomePage