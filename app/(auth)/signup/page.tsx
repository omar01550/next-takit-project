import ContainerWrapper from '@/app/components/containerWrapper'
import React from 'react'
import IntroLogin from '../login/intro'
import IntroSignup from './components/intro'
import CreateAccount from './components/createAccount'

const SignupPage = () => {
  return (
        <main className='signup-page'>
            <ContainerWrapper className='px-0 lg:px-28'>
                 <CreateAccount/>
                 
            </ContainerWrapper>
        </main>

    )
}

export default SignupPage