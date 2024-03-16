import React from 'react'
import ContainerWrapper from '../../components/containerWrapper'
import LoginImage from '@/public/images/login'
import Link from 'next/link'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@/components/ui/button'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IntroLogin from './intro';
import LoginForm from './loginForm';
const LoginPage = () => {
  return (
    <main className="login-page w-full">
          <ContainerWrapper className='flex w-full'>
           <IntroLogin/>

    <section className="intro w-full lg:w-6/12 bg-myblue py-10 flex flex-col items-center">
<div className="form-title">
                <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 text-center md:text-start">
                                             welcome to <span className='text-omar-100'>TaK</span>it     
                </h2>

                                      <p className="text-omar-100 font-semibold text-base md:text-xl capitalize mt-5 w-full md:w-80 text-center">
                                          enter your email and  password to reach your account ticket
                                      </p>
        </div>

<LoginForm/>


                </section>
          </ContainerWrapper>
    </main>
  )
}

export default LoginPage