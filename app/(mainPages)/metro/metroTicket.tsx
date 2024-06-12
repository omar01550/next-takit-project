import Logo from '@/app/components/logo'
import {  PersonStanding, ReceiptRussianRuble, Train, Undo, User } from 'lucide-react'
import Link from 'next/link'
import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"
    

import React from 'react'
import { number } from 'zod'
import MetroDetails from './metroDetails'
interface IMetroTicket{
      type:"train"|"metro",
     number:number,
     from:{
        station:string
        time:string
     },
     to:{
        station:string
        time:string
     },
     round:boolean,
     count:number,
     price:number
};

const NumberTransilation = {
       1:'One',
       2:"Two",
       3:"Three",
       4:"Four",
       5:"Five"
}


const MetroTicket = ({number,from,to,count,price,round,type,ticket}:IMetroTicket) => {
  return (
    
           <div className='capitalize bg-[#ffe0b9] p-4 rounded-md mt-8' >
          <h3 className="text-center text-secondary-100 text-xl">
               No : {number}
          </h3>
          <h3 className="text-2xl mt-2 font-medium capitalize">
               <span className='text-primary-100'>
                   Egypt
               </span>

               <span className='px-2 text-secondary-100 capitalize'>
                 {
                   type=="train"?"Railaways":"Metro"
                 }
               </span>
          </h3>

          <div className="ticket-content flex flex-col gap-8 lg:gap-0 justify-center lg:flex-row lg:justify-between items-center">
                 <div className="from-to w-full flex justify-between items-center">
                         <div className="from mt-4">
                               <h4 className='text-secondary-100 capitalize-100 font-bold text-2xl'>{from.station}</h4>

                         </div>
                         <div className='destance flex flex-col items-center'>
            
                               
                                <Undo/>
                                
                                <Train className='text-primary-100 animate-pulse mt-2 '/>
                         </div>

                         <div className="to mt-4">
                               <h4 className='text-secondary-100 font-bold text-2xl capitalize'>{to.station}</h4>

                         </div>

                 </div>

                 <div className="count-persons w-full flex justify-evenly items-center ps-0 lg:ps-14">
                       <div className="count w-full flex justify-start items-center gap-1">
                             <User className='text-primary-100'/>
                             <h4 className="count-number text-secontary-100">{count}</h4>
                             <h4 className="count-string text-secontary-100">.{NumberTransilation[count]}</h4>
                       </div>

                       <div className="price-section flex flex-col justify-center items-center gap-2 text-secondary-100">

                            <h4 className="price capitalize text-3xl flex justify-center items-center gap-2"><span>EGP</span> {price}</h4>
                            <h4 className="price capitalize text-xl font-bold">rounded</h4>
                             
                            
                       </div>



                 </div>
          </div>
          <div className="more-details w-full flex justify-start items-center">
          <Accordion type="single" collapsible className='w-full' >
              <AccordionItem value='1' >
                   <div className="flex justify-between items-center">
                   <AccordionTrigger className=''>
                        <span className='bg-primary-100 text-white p-1 rounded-md font-bold mt-2 w-auto'>Chose this trip</span>
                    </AccordionTrigger>
                    <h3 className="line capitalize font-semibold text-xl text-secondary-100 flex justify-center items-center gap-2 ">
                        {/* metro icon */}
                    <svg width="180" height="24" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1110_6014)">
<path d="M12.897 4.14H13.779V5.021H12.897V4.14ZM11.269 4.14H12.152V5.021H11.269V4.14ZM16.184 5.195V8.597H14.798V5.195H13.958V6.958H10.975V5.196H10.135V8.598H9.043V9.438H10.954V7.82H13.937V9.437H19.377V5.195H16.184ZM18.536 8.59H17.024V6.028H18.536V8.59ZM5.673 5.195V7.799H8.026V8.604H5.673V9.437H8.866V5.195H5.673ZM8.012 6.952H6.499V6.028H8.012V6.952ZM5.372 19.129V9.726H9.547L12.5 12.68L15.454 9.727H19.63V19.13H15.454V15.688L12.5 18.754L9.548 15.706V19.13L5.372 19.129ZM12.5 0L8.985 3.515H4.015V8.485L0.5 12L4.015 15.515V20.485H8.985L12.5 24L16.015 20.485H20.985V15.515L24.5 12L20.985 8.485V3.515H16.015L12.5 0ZM12.5 1.708L15.514 4.723H19.777V8.986L22.792 12L19.777 15.014V19.277H15.514L12.5 22.292L9.486 19.277H5.223V15.014L2.208 12L5.223 8.986V4.723H9.486L12.5 1.708Z" fill="#9F6A3D"/>
</g>
<path d="M30.4659 6.01705V4.45455H41.375V6.01705H36.8011V19H35.0398V6.01705H30.4659ZM45.5423 12.4375V19H43.8661V4.45455H45.5423V9.79545H45.6843C45.94 9.23201 46.3235 8.78456 46.8349 8.45312C47.351 8.11695 48.0375 7.94886 48.8945 7.94886C49.6379 7.94886 50.2889 8.09801 50.8477 8.39631C51.4064 8.68987 51.8396 9.14205 52.1474 9.75284C52.4599 10.3589 52.6161 11.1307 52.6161 12.0682V19H50.94V12.1818C50.94 11.3153 50.7151 10.6454 50.2653 10.1719C49.8202 9.69366 49.2023 9.45455 48.4116 9.45455C47.8623 9.45455 47.3699 9.57055 46.9343 9.80256C46.5034 10.0346 46.1625 10.3731 45.9116 10.8182C45.6654 11.2633 45.5423 11.803 45.5423 12.4375ZM60.2564 19.2273C59.2053 19.2273 58.2985 18.9953 57.5362 18.5312C56.7786 18.0625 56.1939 17.4091 55.782 16.571C55.3748 15.7282 55.1712 14.7481 55.1712 13.6307C55.1712 12.5133 55.3748 11.5284 55.782 10.6761C56.1939 9.81913 56.7668 9.15152 57.5007 8.6733C58.2393 8.19034 59.1011 7.94886 60.0859 7.94886C60.6541 7.94886 61.2152 8.04356 61.7692 8.23295C62.3232 8.42235 62.8274 8.73011 63.282 9.15625C63.7365 9.57765 64.0987 10.1364 64.3686 10.8324C64.6385 11.5284 64.7734 12.3854 64.7734 13.4034V14.1136H56.3643V12.6648H63.0689C63.0689 12.0492 62.9458 11.5 62.6996 11.017C62.4581 10.5341 62.1125 10.1529 61.6626 9.87358C61.2176 9.59422 60.692 9.45455 60.0859 9.45455C59.4183 9.45455 58.8407 9.62026 58.353 9.9517C57.87 10.2784 57.4983 10.7045 57.2379 11.2301C56.9775 11.7557 56.8473 12.3191 56.8473 12.9205V13.8864C56.8473 14.7102 56.9893 15.4086 57.2734 15.9815C57.5623 16.5497 57.9624 16.983 58.4737 17.2812C58.9851 17.5748 59.5793 17.7216 60.2564 17.7216C60.6967 17.7216 61.0945 17.66 61.4496 17.5369C61.8094 17.4091 62.1196 17.2197 62.38 16.9688C62.6404 16.7131 62.8416 16.3958 62.9837 16.017L64.603 16.4716C64.4325 17.0208 64.1461 17.5038 63.7436 17.9205C63.3411 18.3324 62.844 18.6544 62.2521 18.8864C61.6603 19.1136 60.995 19.2273 60.2564 19.2273ZM80.6754 10.5341L79.1697 10.9602C79.075 10.7093 78.9354 10.4654 78.7507 10.2287C78.5708 9.98722 78.3246 9.78835 78.0121 9.6321C77.6996 9.47585 77.2995 9.39773 76.8118 9.39773C76.1442 9.39773 75.5878 9.55161 75.1428 9.85938C74.7024 10.1624 74.4822 10.5483 74.4822 11.017C74.4822 11.4337 74.6338 11.7628 74.9368 12.0043C75.2398 12.2457 75.7133 12.447 76.3572 12.608L77.9766 13.0057C78.9519 13.2424 79.6787 13.6046 80.157 14.0923C80.6352 14.5753 80.8743 15.1979 80.8743 15.9602C80.8743 16.5852 80.6944 17.1439 80.3345 17.6364C79.9794 18.1288 79.4822 18.517 78.843 18.8011C78.2038 19.0852 77.4605 19.2273 76.6129 19.2273C75.5002 19.2273 74.5793 18.9858 73.8501 18.5028C73.121 18.0199 72.6593 17.3144 72.4652 16.3864L74.0561 15.9886C74.2076 16.5758 74.4941 17.0161 74.9155 17.3097C75.3416 17.6032 75.898 17.75 76.5845 17.75C77.3658 17.75 77.986 17.5843 78.4453 17.2528C78.9093 16.9167 79.1413 16.5142 79.1413 16.0455C79.1413 15.6667 79.0088 15.3494 78.7436 15.0938C78.4785 14.8333 78.0713 14.6392 77.522 14.5114L75.7038 14.0852C74.7048 13.8485 73.9709 13.4815 73.5021 12.9844C73.0381 12.4825 72.8061 11.8551 72.8061 11.1023C72.8061 10.4867 72.9789 9.94223 73.3246 9.46875C73.675 8.99527 74.1508 8.62358 74.7521 8.35369C75.3582 8.08381 76.0447 7.94886 76.8118 7.94886C77.8913 7.94886 78.7389 8.18561 79.3544 8.65909C79.9747 9.13258 80.415 9.75758 80.6754 10.5341ZM87.9712 19.2273C86.9201 19.2273 86.0134 18.9953 85.2511 18.5312C84.4935 18.0625 83.9087 17.4091 83.4968 16.571C83.0896 15.7282 82.886 14.7481 82.886 13.6307C82.886 12.5133 83.0896 11.5284 83.4968 10.6761C83.9087 9.81913 84.4817 9.15152 85.2156 8.6733C85.9542 8.19034 86.8159 7.94886 87.8008 7.94886C88.369 7.94886 88.93 8.04356 89.484 8.23295C90.038 8.42235 90.5423 8.73011 90.9968 9.15625C91.4513 9.57765 91.8136 10.1364 92.0835 10.8324C92.3533 11.5284 92.4883 12.3854 92.4883 13.4034V14.1136H84.0792V12.6648H90.7837C90.7837 12.0492 90.6606 11.5 90.4144 11.017C90.1729 10.5341 89.8273 10.1529 89.3775 9.87358C88.9324 9.59422 88.4068 9.45455 87.8008 9.45455C87.1332 9.45455 86.5555 9.62026 86.0678 9.9517C85.5849 10.2784 85.2132 10.7045 84.9528 11.2301C84.6924 11.7557 84.5621 12.3191 84.5621 12.9205V13.8864C84.5621 14.7102 84.7042 15.4086 84.9883 15.9815C85.2771 16.5497 85.6772 16.983 86.1886 17.2812C86.6999 17.5748 87.2942 17.7216 87.9712 17.7216C88.4116 17.7216 88.8093 17.66 89.1644 17.5369C89.5243 17.4091 89.8344 17.2197 90.0948 16.9688C90.3552 16.7131 90.5565 16.3958 90.6985 16.017L92.3178 16.4716C92.1474 17.0208 91.8609 17.5038 91.4585 17.9205C91.056 18.3324 90.5588 18.6544 89.967 18.8864C89.3751 19.1136 88.7099 19.2273 87.9712 19.2273ZM99.4698 19.2273C98.4471 19.2273 97.5664 18.9858 96.8278 18.5028C96.0891 18.0199 95.521 17.3546 95.1232 16.5071C94.7255 15.6596 94.5266 14.6913 94.5266 13.6023C94.5266 12.4943 94.7302 11.5166 95.1374 10.669C95.5494 9.81676 96.1223 9.15152 96.8562 8.6733C97.5948 8.19034 98.4566 7.94886 99.4414 7.94886C100.208 7.94886 100.9 8.09091 101.515 8.375C102.131 8.65909 102.635 9.05682 103.028 9.56818C103.421 10.0795 103.665 10.6761 103.76 11.358H102.083C101.956 10.8608 101.672 10.4205 101.231 10.0369C100.796 9.64867 100.208 9.45455 99.4698 9.45455C98.8164 9.45455 98.2435 9.625 97.7511 9.96591C97.2634 10.3021 96.8822 10.7779 96.6076 11.3935C96.3377 12.0043 96.2028 12.7216 96.2028 13.5455C96.2028 14.3883 96.3353 15.1222 96.6005 15.7472C96.8704 16.3722 97.2492 16.8575 97.7369 17.2031C98.2293 17.5488 98.8069 17.7216 99.4698 17.7216C99.9054 17.7216 100.301 17.6458 100.656 17.4943C101.011 17.3428 101.312 17.125 101.558 16.8409C101.804 16.5568 101.979 16.2159 102.083 15.8182H103.76C103.665 16.4621 103.431 17.0421 103.056 17.5582C102.687 18.0696 102.197 18.4768 101.586 18.7798C100.98 19.0781 100.275 19.2273 99.4698 19.2273ZM110.642 19.2273C109.657 19.2273 108.793 18.9929 108.049 18.5241C107.311 18.0554 106.733 17.3996 106.316 16.5568C105.904 15.714 105.699 14.7292 105.699 13.6023C105.699 12.4659 105.904 11.474 106.316 10.6264C106.733 9.77888 107.311 9.12074 108.049 8.65199C108.793 8.18324 109.657 7.94886 110.642 7.94886C111.627 7.94886 112.488 8.18324 113.227 8.65199C113.97 9.12074 114.548 9.77888 114.96 10.6264C115.377 11.474 115.585 12.4659 115.585 13.6023C115.585 14.7292 115.377 15.714 114.96 16.5568C114.548 17.3996 113.97 18.0554 113.227 18.5241C112.488 18.9929 111.627 19.2273 110.642 19.2273ZM110.642 17.7216C111.39 17.7216 112.005 17.5298 112.488 17.1463C112.971 16.7628 113.329 16.2585 113.561 15.6335C113.793 15.0085 113.909 14.3314 113.909 13.6023C113.909 12.8731 113.793 12.1937 113.561 11.5639C113.329 10.9342 112.971 10.4252 112.488 10.0369C112.005 9.64867 111.39 9.45455 110.642 9.45455C109.894 9.45455 109.278 9.64867 108.795 10.0369C108.312 10.4252 107.955 10.9342 107.723 11.5639C107.491 12.1937 107.375 12.8731 107.375 13.6023C107.375 14.3314 107.491 15.0085 107.723 15.6335C107.955 16.2585 108.312 16.7628 108.795 17.1463C109.278 17.5298 109.894 17.7216 110.642 17.7216ZM119.82 12.4375V19H118.143V8.09091H119.763V9.79545H119.905C120.161 9.24148 120.549 8.7964 121.07 8.46023C121.59 8.11932 122.263 7.94886 123.087 7.94886C123.825 7.94886 124.472 8.10038 125.026 8.40341C125.58 8.7017 126.01 9.15625 126.318 9.76705C126.626 10.3731 126.78 11.1402 126.78 12.0682V19H125.104V12.1818C125.104 11.3248 124.881 10.6572 124.436 10.179C123.991 9.69602 123.38 9.45455 122.604 9.45455C122.069 9.45455 121.59 9.57055 121.169 9.80256C120.752 10.0346 120.423 10.3731 120.182 10.8182C119.94 11.2633 119.82 11.803 119.82 12.4375ZM133.962 19.2273C133.053 19.2273 132.25 18.9976 131.554 18.5384C130.858 18.0743 130.314 17.4209 129.921 16.5781C129.528 15.7306 129.331 14.7292 129.331 13.5739C129.331 12.428 129.528 11.4337 129.921 10.5909C130.314 9.74811 130.861 9.09706 131.561 8.63778C132.262 8.1785 133.072 7.94886 133.99 7.94886C134.701 7.94886 135.262 8.06723 135.674 8.30398C136.09 8.53598 136.408 8.80114 136.625 9.09943C136.848 9.39299 137.021 9.63447 137.144 9.82386H137.286V4.45455H138.962V19H137.343V17.3239H137.144C137.021 17.5227 136.846 17.7737 136.618 18.0767C136.391 18.375 136.067 18.6425 135.645 18.8793C135.224 19.1113 134.663 19.2273 133.962 19.2273ZM134.189 17.7216C134.862 17.7216 135.43 17.5464 135.894 17.196C136.358 16.8409 136.711 16.3509 136.952 15.7259C137.194 15.0961 137.314 14.3693 137.314 13.5455C137.314 12.7311 137.196 12.0185 136.959 11.4077C136.722 10.7921 136.372 10.3139 135.908 9.97301C135.444 9.62737 134.871 9.45455 134.189 9.45455C133.479 9.45455 132.887 9.63684 132.414 10.0014C131.945 10.3613 131.592 10.8513 131.355 11.4716C131.123 12.0871 131.007 12.7784 131.007 13.5455C131.007 14.322 131.126 15.0275 131.363 15.6619C131.604 16.2917 131.959 16.7936 132.428 17.1676C132.901 17.5369 133.489 17.7216 134.189 17.7216ZM149.566 4.45455V19H147.89V4.45455H149.566ZM152.636 19V8.09091H154.312V19H152.636ZM153.488 6.27273C153.161 6.27273 152.879 6.16146 152.643 5.93892C152.411 5.71638 152.295 5.44886 152.295 5.13636C152.295 4.82386 152.411 4.55634 152.643 4.33381C152.879 4.11127 153.161 4 153.488 4C153.815 4 154.094 4.11127 154.326 4.33381C154.563 4.55634 154.681 4.82386 154.681 5.13636C154.681 5.44886 154.563 5.71638 154.326 5.93892C154.094 6.16146 153.815 6.27273 153.488 6.27273ZM159.058 12.4375V19H157.382V8.09091H159.001V9.79545H159.143C159.399 9.24148 159.787 8.7964 160.308 8.46023C160.829 8.11932 161.501 7.94886 162.325 7.94886C163.064 7.94886 163.71 8.10038 164.264 8.40341C164.818 8.7017 165.249 9.15625 165.556 9.76705C165.864 10.3731 166.018 11.1402 166.018 12.0682V19H164.342V12.1818C164.342 11.3248 164.119 10.6572 163.674 10.179C163.229 9.69602 162.618 9.45455 161.842 9.45455C161.307 9.45455 160.829 9.57055 160.407 9.80256C159.991 10.0346 159.662 10.3731 159.42 10.8182C159.179 11.2633 159.058 11.803 159.058 12.4375ZM173.655 19.2273C172.604 19.2273 171.697 18.9953 170.935 18.5312C170.177 18.0625 169.592 17.4091 169.18 16.571C168.773 15.7282 168.57 14.7481 168.57 13.6307C168.57 12.5133 168.773 11.5284 169.18 10.6761C169.592 9.81913 170.165 9.15152 170.899 8.6733C171.638 8.19034 172.5 7.94886 173.484 7.94886C174.053 7.94886 174.614 8.04356 175.168 8.23295C175.722 8.42235 176.226 8.73011 176.68 9.15625C177.135 9.57765 177.497 10.1364 177.767 10.8324C178.037 11.5284 178.172 12.3854 178.172 13.4034V14.1136H169.763V12.6648H176.467C176.467 12.0492 176.344 11.5 176.098 11.017C175.857 10.5341 175.511 10.1529 175.061 9.87358C174.616 9.59422 174.09 9.45455 173.484 9.45455C172.817 9.45455 172.239 9.62026 171.751 9.9517C171.268 10.2784 170.897 10.7045 170.636 11.2301C170.376 11.7557 170.246 12.3191 170.246 12.9205V13.8864C170.246 14.7102 170.388 15.4086 170.672 15.9815C170.961 16.5497 171.361 16.983 171.872 17.2812C172.384 17.5748 172.978 17.7216 173.655 17.7216C174.095 17.7216 174.493 17.66 174.848 17.5369C175.208 17.4091 175.518 17.2197 175.778 16.9688C176.039 16.7131 176.24 16.3958 176.382 16.017L178.001 16.4716C177.831 17.0208 177.545 17.5038 177.142 17.9205C176.74 18.3324 176.242 18.6544 175.651 18.8864C175.059 19.1136 174.393 19.2273 173.655 19.2273Z" fill="#132968"/>
<defs>
<clipPath id="clip0_1110_6014">
<rect width="24" height="24" fill="white" transform="translate(0.5)"/>

</clipPath>
</defs>
</svg>
{/* metro icon */}

                    </h3>
                    <Link href="/" className='capitalize text-2xl font-bold text-blue-950'>
                                        tak<span className='text-primary-100'>it</span>
                            </Link>

                   </div>
                    <AccordionContent className='w-full' >
                          <MetroDetails  count={count} price={price} ticket={ticket}/>
                    </AccordionContent>

              </AccordionItem>
               
          </Accordion>
          </div>
          
    </div>
  )
}

export default MetroTicket;