import React from 'react'
import { Button } from '@/components/ui/button'

const SendBtn = ({text,step,setStep}:{text:string}) => {
  return (
    <div className='w-full flex justify-center items-center'>
                <Button className='bg-blue-900 rounded-full px-20 py-3 w-fit text-2xl flex justify-center items-center mt-10 hover:bg-blue-800 cursor-pointer' onClick={() => {
                     setStep(step+1)
                }}>
                    {text}
                </Button>

        </div>
  )
}

export default SendBtn