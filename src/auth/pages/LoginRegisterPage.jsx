import React, { useState } from 'react'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { SwitchLogin } from '../components/SwitchLogin.jsx'
import { SwitchRegister } from '../components/SwitchRegister'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginRegisterPage = () => {

    const [isLogin, setIsLogin] = useState(true)

    const changeSwitch = ()=>{
        setIsLogin(!isLogin)
    }

  return (
        <AuthLayout>
            {
                isLogin
                ?
                <>
                    <SwitchLogin isLogin changeSwitch={changeSwitch}/>
                    <Login/>
                </>
                :
                <> 
                    <Register/>
                    <SwitchRegister isLogin changeSwitch={changeSwitch}/>
                </>
            }
        </AuthLayout>
    )
}
