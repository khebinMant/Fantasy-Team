import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginRegisterPage } from '../auth/pages/LoginRegisterPage';
import { CheckingAuth } from "../components/CheckingAuth";
import { useCheckOut } from "../hooks/useCheckout";
import { MainPage } from "../pages/Main/MainPage";
import { FantasyLayout } from "../ui/FantasyLayout";

export const MainRouter = () => {

    const {status} = useCheckOut()

    if( status === 'checking'){
        return <CheckingAuth/>
    }

  return (
            <Routes>
                {     
                    status === 'authenticated'
                    ?  
                    <Route path='/*' element={<MainPage/>}/>
                    :
                    <Route path='/auth/' element={<LoginRegisterPage/>}/>
                }
                <Route path='/*' element={<Navigate to='/auth/'/> }/>

            </Routes>
    )
}
