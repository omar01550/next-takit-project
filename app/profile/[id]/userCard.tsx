import Image from 'next/image'
import React from 'react'
import userImage from './userImage.png'
import { Trash, Trash2 } from 'lucide-react'

const UserCard = () => {
  return (
   <section className="flex flex-col justify-center items-start lg:flex-row lg:items-end lg:justify-between gap-4 border-solid border-2 border-primary-100 p-6 rounded-md mt-10 w-full">
        <div className="flex justify-center items-center gap-3">
              <Image src={userImage} alt="not found image "/>
              <div className="flex flex-col gap-2 text-secondary-100">
                  <h3 className="user-name font-bold text-xl">Ahmed elazab</h3>
                  <h4 className="country text-lg font-semibold">Egyptian notion</h4>
                  <h4 className="country text-lg font-semibold">ahmedelazab@gmail.com</h4>
              </div>
         </div>

        <button className="upload-image bg-secondary-100 text-2xl px-8 py-2 rounded-md text-white flex justify-center items-center gap-2">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.75 13V8.5C21.75 7.17392 21.2232 5.90215 20.2855 4.96447C19.3479 4.02678 18.0761 3.5 16.75 3.5H8.25C6.92392 3.5 5.65215 4.02678 4.71447 4.96447C3.77678 5.90215 3.25 7.17392 3.25 8.5V15.5C3.25 16.1566 3.37933 16.8068 3.6306 17.4134C3.88188 18.02 4.25017 18.5712 4.71447 19.0355C5.65215 19.9732 6.92392 20.5 8.25 20.5H14.51" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.50977 17L6.24977 13.8C6.60961 13.4426 7.08188 13.2205 7.58665 13.1713C8.09141 13.1221 8.59768 13.2488 9.01977 13.53C9.44185 13.8112 9.94812 13.9379 10.4529 13.8887C10.9577 13.8395 11.4299 13.6174 11.7898 13.26L14.1198 10.93C14.7893 10.2582 15.6757 9.84621 16.6208 9.76745C17.5659 9.68869 18.5083 9.94832 19.2798 10.5L21.7498 12.41M8.50977 10.17C8.72776 10.1687 8.94336 10.1245 9.14426 10.0398C9.34516 9.95518 9.52742 9.83181 9.68063 9.67673C9.83385 9.52166 9.95502 9.33792 10.0372 9.13602C10.1194 8.93412 10.1611 8.718 10.1598 8.50001C10.1585 8.28201 10.1142 8.06641 10.0296 7.86551C9.94494 7.66461 9.82157 7.48235 9.66649 7.32914C9.51142 7.17592 9.32768 7.05475 9.12578 6.97254C8.92388 6.89033 8.70776 6.84869 8.48977 6.85001C8.04951 6.85266 7.62833 7.03009 7.3189 7.34328C7.00946 7.65647 6.83711 8.07975 6.83977 8.52001C6.84242 8.96027 7.01985 9.38144 7.33304 9.69087C7.64623 10.0003 8.06951 10.1727 8.50977 10.17Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.207 15V20" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M21.5001 17.105L19.5331 15.138C19.4905 15.0948 19.4397 15.0606 19.3837 15.0372C19.3278 15.0138 19.2677 15.0017 19.2071 15.0017C19.1464 15.0017 19.0864 15.0138 19.0304 15.0372C18.9744 15.0606 18.9237 15.0948 18.8811 15.138L16.9141 17.105" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              Upload Photo
        </button>

        <button className="upload-image bg-primary-100 text-2xl px-8 py-2 rounded-md text-white flex justify-center items-center gap-2">
<Trash2/>

                 Delete
        </button>

   </section>

)
}

export default UserCard