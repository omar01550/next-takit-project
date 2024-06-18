import Logo from '@/app/components/logo'
import Image from 'next/image'
import React from 'react'
import UserImage from '../images/Graph.png'
import Link from 'next/link'
import TrainIcon from '@/app/HomeComponents/icons/trainIcon'
import BusIcon from '@/app/HomeComponents/icons/busIcon'
import MetroIcon from '@/app/HomeComponents/icons/metroIcon'


const mainMenu = [
    //  {
    //      title:"My Tickets",
    //      icon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //      <path d="M7 8.36847C7 8.30217 7.02634 8.23858 7.07322 8.19169C7.12011 8.14481 7.1837 8.11847 7.25 8.11847H16.75C16.8163 8.11847 16.8799 8.14481 16.9268 8.19169C16.9737 8.23858 17 8.30217 17 8.36847V20.1185C17 20.6489 16.7893 21.1576 16.4142 21.5327C16.0391 21.9078 15.5304 22.1185 15 22.1185H14.25C14.112 22.1185 14.002 22.0055 13.985 21.8685C13.9253 21.384 13.6906 20.9381 13.325 20.6148C12.9593 20.2914 12.4881 20.113 12 20.113C11.5119 20.113 11.0407 20.2914 10.675 20.6148C10.3094 20.9381 10.0747 21.384 10.015 21.8685C9.998 22.0055 9.888 22.1185 9.75 22.1185H9C8.46957 22.1185 7.96086 21.9078 7.58579 21.5327C7.21071 21.1576 7 20.6489 7 20.1185V8.36847ZM7.25 7.11847C7.1837 7.11847 7.12011 7.09213 7.07322 7.04525C7.02634 6.99836 7 6.93477 7 6.86847V4.11847C7 3.58804 7.21071 3.07933 7.58579 2.70426C7.96086 2.32918 8.46957 2.11847 9 2.11847H9.75C9.888 2.11847 9.998 2.23047 10.015 2.36847C10.0747 2.8529 10.3094 3.29879 10.675 3.62214C11.0407 3.94549 11.5119 4.12398 12 4.12398C12.4881 4.12398 12.9593 3.94549 13.325 3.62214C13.6906 3.29879 13.9253 2.8529 13.985 2.36847C14.002 2.23047 14.112 2.11847 14.25 2.11847H15C15.5304 2.11847 16.0391 2.32918 16.4142 2.70426C16.7893 3.07933 17 3.58804 17 4.11847V6.86847C17 6.93477 16.9737 6.99836 16.9268 7.04525C16.8799 7.09213 16.8163 7.11847 16.75 7.11847H7.25Z" fill="#132968" className="hover:bg-white"/>
    //      </svg>
    //      ,
    //      link:'/profile/2321321/my-tickets'
    //  },
     {
        title:"Analysis",
        icon:<svg width="29" height="35" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 2898">
        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M18.2742 5.46015L19.4089 6.64416L3.38388 22.6692L0.799197 18.7922C0.196104 17.8445 -0.648226 15.3287 0.799197 12.8474C2.24662 10.3661 9.50126 3.54254 12.9477 0.440918H13.4641L14.6991 1.72957C14.2405 2.19602 13.9576 2.83575 13.9576 3.54156C13.9576 4.96904 15.1148 6.12624 16.5423 6.12624C17.2085 6.12624 17.8159 5.87415 18.2742 5.46015Z" fill="#132968"/>
        <path id="Subtract_2" fill-rule="evenodd" clip-rule="evenodd" d="M10.4407 29.5404L9.30592 28.3563L25.0721 12.5898L27.9156 16.2083C28.5187 17.156 29.3631 19.6718 27.9156 22.1531C26.4682 24.6344 19.2136 31.458 15.7672 34.5596L15.2507 34.5596L14.0158 33.271C14.4744 32.8045 14.7574 32.1648 14.7574 31.4589C14.7574 30.0314 13.6002 28.8742 12.1727 28.8742C11.5064 28.8742 10.899 29.1264 10.4407 29.5404Z" fill="#132968"/>
        <path id="Vector 3" d="M25.0712 12.5898H14.2155H13.4401L3.35986 22.6701H14.9909L25.0712 12.5898Z" fill="#9F6A3D"/>
        </g>
        </svg>,
        link:"/dashboard/anlysis"
    },
    {
        title:"Users",
        icon:<TrainIcon/>,
        link:"/dashboard/users"
    },
    {
        title:"Tickets",
        icon:<MetroIcon/>,
        link:"/dashboard/tickets"
    },
    {
        title:"Add Ticket",
        icon:<BusIcon/>,
        link:"/dashboard/add-ticket"
    },
    
    
]




const DashBoardSideBar = () => {
  return (
    <aside className="sidebar w-[300px] h-screen border-e-2 border-e-secondary-100   text-white py-10 px-6 bg-[#F4ECDC] hidden lg:block">
        <Logo/>
        <div className="flex justify-center items-center gap-3 mt-8 py-8 px-4 border-b-solid border-b-2 border-b-primary-100">
              {/* <Image src={UserImage} alt="not found image " className='w-[60] h-[60px]'/> */}
              <div className="flex flex-col gap-2 text-secondary-100">
                  <h3 className="user-name font-bold text-xl">Ahmed elazab</h3>
                  <h4 className="country text-base font-semibold">Egyptian notion</h4>
                  <h4 className="country text-base font-semibold">ahmedelazab@gmail.com</h4>
              </div>
       </div>
       <div className="py-20 flex-col gap-3 justify-center items-center border-b-solid border-b-2 border-b-primary-100 flex">

            {
                 mainMenu.map((item) => {
                     return(
                        <Link href={item.link} className='w-full py-2 mt-2 hover:bg-secondary-100 text-secondary-100 hover:text-white text-2xl font-semibold px-8 rounded-md flex justify-start items-center gap-3'>
{item.icon}
                                {item.title}
                     </Link>     
        
        
                     )
                 })
            }
                   </div>

  </aside>

)
}

export default DashBoardSideBar