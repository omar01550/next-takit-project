import React from 'react'

const RegisterInfo = ({step,setStep}) => {
  return (
    <div className="registerInfo">
        <button onClick={() => {
            setStep(step-1)
        }}>bacl</button>
          register info

          <button className='' >submit</button>
    </div>
  )
}

export default RegisterInfo
