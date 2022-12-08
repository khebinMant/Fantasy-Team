import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { loginRegisterSlice } from "./loginregister/loginRegisterSlice";


export const store = configureStore ({
    reducer:{
        auth: authSlice.reducer,
        loginRegister: loginRegisterSlice.reducer
    },
})