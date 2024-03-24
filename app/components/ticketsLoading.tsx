import { Train, TrainTrack,Bus } from 'lucide-react'
import React from 'react'

const TicketsLoading = () => {
  return (
    <div className="w-full bg-gray-200 flex justify-center items-center h-80">
            <div className="flex justify-center items-center text-primary-100 flex-col animate-pulse">
                   <Bus />
                   <TrainTrack className="rotate-45"/>
            </div>
    </div>
  )
}

export default TicketsLoading