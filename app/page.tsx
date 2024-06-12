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
import FeatureCard from './HomeComponents/featureCard'
import GuideCard from './HomeComponents/guideCard'
import Search from './HomeComponents/icons/Search'
import Select from './HomeComponents/icons/select'
import Insert from './HomeComponents/icons/insert'
import CheckOut from './HomeComponents/icons/checkOut'
import Ticket from './HomeComponents/icons/ticket'
import GroupIcon from './HomeComponents/icons/groupIcon'

const HomePage = () => {

  return (
    <main className="home w-full">

          <Hero/>
          <div className="flex justify-center items-center flex-col">
                <h1 className="text-center text-secondary-100 text-3xl font-bold translate-y-28">All Your Tickets options in one place</h1>
                <Image src={GruopImage} alt="not found"/>
          </div>

          <ContainerWrapper className=' space-y-6 py-12 '>
            <section className="services flex flex-col justify-center items-center lg:flex-row lg:justify-between">
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


            </section>

            {/* features section */}
            
            <section className="features py-16">
              <div className=' text-center text-2xl md:text-3xl text-secondary-100 capitalize space-x-2 font-semibold'>                Ticket <span className='text-primary-100'>Booking</span> Way</div>
                
                <div className="cards w-full flex justify-center md:justify-between items-center flex-wrap lg:flex-nowrap mt-16">
                     <FeatureCard title="Search" des="search for your suitable trib through the search bar above" icon={<Search/>}/>
                     <FeatureCard title={"Select"} des={"Choose the category that suits you according to price and time"} icon={<Select/>}/>

                     <FeatureCard title={"Insert"} des={"insert your data and choose your place"} icon={<Insert/>}/>

                     <FeatureCard title={"Check Out"} des={"choose the most suitable method of checkout for you"} icon={<CheckOut/>}/>

                </div>
            </section>

{/* features section */}

{/* guide section */}
<section className="guide py-16">
              <div className=' text-center text-2xl md:text-3xl text-secondary-100 capitalize space-x-[2px] font-semibold'>                 <span className='text-primary-100'>we are </span> the best choice for you</div>

                
                <div className="cards w-full flex justify-center md:justify-between items-center flex-wrap lg:flex-nowrap mt-16 ">
                       <GuideCard icon={<Ticket/>} title={"get your tickets from the comfort of your home"} des={"Book your ticket from anywhere with our powerful ticket form exclusively designed to save your effort and time"}/>
                       <GuideCard icon={<Ticket/>} title={"get your tickets from the comfort of your home"} des={"Book your ticket from anywhere with our powerful ticket form exclusively designed to save your effort and time"}/>
                       <GuideCard icon={<Ticket/>} title={"get your tickets from the comfort of your home"} des={"Book your ticket from anywhere with our powerful ticket form exclusively designed to save your effort and time"}/>

                </div>
            </section>
{/* guide section */}

             
             
                
          </ContainerWrapper>
       

    </main>
  )
}

export default HomePage