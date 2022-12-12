import { createSlice } from '@reduxjs/toolkit';

export const loginRegisterSlice = createSlice({
    name: 'loginRegister',
    initialState: {
        isLogin: true
    },
    reducers: {
        toggleLoginRegister: ( state ) => {
            state.isLogin = !state.isLogin
        },
    }
});


// Action creators are generated for each case reducer function
export const { toggleLoginRegister } = loginRegisterSlice.actions;