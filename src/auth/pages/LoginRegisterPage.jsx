import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { SwitchLogin } from '../components/SwitchLogin.jsx'
import { SwitchRegister } from '../components/SwitchRegister'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginRegisterPage = () => {

    const { isLogin } = useSelector( state=> state.loginRegister )


  return (
        <AuthLayout>
            {
                isLogin
                ?
                <>
                    <SwitchLogin />
                    <Login/>
                </>
                :
                <> 
                    <Register/>
                    <SwitchRegister />
                </>
            }
        </AuthLayout>
    )
}
