import Logo from '@/app/components/logo'
import { Train, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const 
MetroDetails = ({count,ticket}) => {




  return (
    <div className="w-full bf-white p-4">
          <div className="train-details-header flex justify-between items-center">
                <Logo/>
                <X/>
          </div>

          <div className="train-info flex flex-col md:flex-row justify-between items-center mt-5 capitalize text-secondary-100 text-2xl font-semibold">
              <div className="station-count">
                  {/* Track ({ticket.stations.length} station) */}
              </div>

              <div className="train-number flex flex-col md:flex-row justify-center items-center gap-3">
              <Train/>

                   <p className="">Train 808- Featured tahya masr</p>

              </div>

          </div>

          <div className="stations-line w-full h-[2px] bg-primary-100 rounded-md mt-24 hidden md:flex justify-between items-center ">
              {
              ticket.stations.map((station) => {
                 return (
                     <div className='w-[14px] h-[14px] rounded-full border-2 border-solid border-secondary-100 relative bg-gray-100 '>
                          <div className="absolute station-name text-secondary-100 -top-10 font-semibold">
                             {station.name}
                          </div>

                     </div>
                 )
              })
              }
          </div>

{/* line info and time */}


          <div className="flex justify-between items-center font-semibold text-2xl capitalize mt-12 text-secondary-100">
                <div className="flex justify-center items-center gap-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.07006 4.96902C2.87006 1.50902 8.08006 1.50902 8.87006 4.96902C9.34006 6.99902 8.05006 8.71902 6.93006 9.78902C6.11006 10.569 4.82006 10.559 4.00006 9.78902C2.89006 8.71902 1.60006 6.99902 2.07006 4.96902Z" stroke="#132968" stroke-width="1.5"/>
<path d="M15.07 16.969C15.87 13.509 21.11 13.509 21.91 16.969C22.38 18.999 21.09 20.719 19.96 21.789C19.14 22.569 17.84 22.559 17.02 21.789C15.89 20.719 14.6 18.999 15.07 16.969Z" stroke="#132968" stroke-width="1.5"/>
<path d="M11.9999 5.36914H14.6799C16.5299 5.36914 17.3899 7.65914 15.9999 8.87914L8.00995 15.8691C6.61995 17.0791 7.47994 19.3691 9.31994 19.3691H11.9999" stroke="#132968" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.48622 5.86914H5.49777" stroke="#132968" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4862 17.8691H18.4978" stroke="#132968" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      <h5 className=""><span className="text-primary-100">Muneeb</span> Direction</h5>
                </div>


                <div className="flex justify-center items-center gap-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1110_6137)">
<path d="M12.397 4.50914H13.279V5.39014H12.397V4.50914ZM10.769 4.50914H11.652V5.39014H10.769V4.50914ZM15.684 5.56414V8.96614H14.298V5.56414H13.458V7.32714H10.475V5.56514H9.635V8.96714H8.543V9.80714H10.454V8.18914H13.437V9.80614H18.877V5.56414H15.684ZM18.036 8.95914H16.524V6.39714H18.036V8.95914ZM5.173 5.56414V8.16814H7.526V8.97314H5.173V9.80614H8.366V5.56414H5.173ZM7.512 7.32114H5.999V6.39714H7.512V7.32114ZM4.872 19.4981V10.0951H9.047L12 13.0491L14.954 10.0961H19.13V19.4991H14.954V16.0571L12 19.1231L9.048 16.0751V19.4991L4.872 19.4981ZM12 0.369141L8.485 3.88414H3.515V8.85414L0 12.3691L3.515 15.8841V20.8541H8.485L12 24.3691L15.515 20.8541H20.485V15.8841L24 12.3691L20.485 8.85414V3.88414H15.515L12 0.369141ZM12 2.07714L15.014 5.09214H19.277V9.35514L22.292 12.3691L19.277 15.3831V19.6461H15.014L12 22.6611L8.986 19.6461H4.723V15.3831L1.708 12.3691L4.723 9.35514V5.09214H8.986L12 2.07714Z" fill="#132968"/>
</g>
<defs>
<clipPath id="clip0_1110_6137">
<rect width="24" height="24" fill="white" transform="translate(0 0.369141)"/>
</clipPath>
</defs>
</svg>


                      <h5 className=""><span className="text-primary-100">Second</span> Line`</h5>
                </div>


                


                <div className="flex justify-center items-center gap-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.8691C9.9233 22.8691 7.89323 22.2533 6.16652 21.0996C4.4398 19.9458 3.09399 18.3059 2.29927 16.3873C1.50455 14.4687 1.29661 12.3575 1.70176 10.3207C2.1069 8.2839 3.10693 6.41298 4.57538 4.94452C6.04383 3.47607 7.91476 2.47604 9.95156 2.0709C11.9884 1.66576 14.0996 1.87369 16.0182 2.66841C17.9368 3.46313 19.5767 4.80894 20.7304 6.53566C21.8842 8.26237 22.5 10.2924 22.5 12.3691C22.5 15.1539 21.3938 17.8246 19.4246 19.7938C17.4555 21.7629 14.7848 22.8691 12 22.8691ZM12 3.36915C10.22 3.36915 8.47992 3.89699 6.99987 4.88592C5.51983 5.87485 4.36628 7.28046 3.68509 8.92499C3.0039 10.5695 2.82567 12.3791 3.17294 14.125C3.5202 15.8708 4.37737 17.4744 5.63604 18.7331C6.89472 19.9918 8.49836 20.8489 10.2442 21.1962C11.99 21.5435 13.7996 21.3652 15.4442 20.6841C17.0887 20.0029 18.4943 18.8493 19.4832 17.3693C20.4722 15.8892 21 14.1492 21 12.3691C21 9.9822 20.0518 7.69301 18.364 6.00518C16.6761 4.31736 14.387 3.36915 12 3.36915Z" fill="#132968"/>
<path d="M15.4425 16.8691L11.25 12.6766V5.61914H12.75V12.0541L16.5 15.8116L15.4425 16.8691Z" fill="#132968"/>
</svg>



                      <h5 className=""><span className="text-primary-100">23</span> minute</h5>
                </div>


          </div>

          <div className="mt-10 flex justify-center items-center gap-2 capitalize text-secondary-100 text-2xl font-semibold">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.28 10.8189L21 7.09888L17.28 3.37891" stroke="#9F6A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.09863H21" stroke="#9F6A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.71997 13.9189L3 17.639L6.71997 21.3589" stroke="#9F6A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 17.6387H3" stroke="#9F6A3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              There are no interchange stations on the trip
          </div>

        
           



          <Link className="btn flex justify-center items-center mt-20" href={`/payment?count=${count}&id=${3432423}`}>
                <button className=' text-white bg-primary-100 font-semibold text-xl px-4 py-2 rounded-md shadow-sm capitalize'>Book Ticket</button>
          </Link>
    </div>
  )
}

export default MetroDetails 