import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',//'not-authenticated' 'authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        correctRegister: false
    },
    reducers: {
        setInitialState:(state)=>{
            state.status = 'not-authenticated'
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = null
            state.correctRegister= false
        },
        login:(state, { payload })=>{
            state.status = 'authenticated'
            state.uid = payload.uid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMessage = null
            state.correctRegister= true
        },
        logout:(state, { payload } )=>{
            state.status = 'not-authenticated'
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = payload?.errorMessage
            state.correctRegister= false
        },
        checkingCredential:(state)=>{
            state.status = 'checking'; 
        },
        setIncorrectRegister:(state)=>{
            state.correctRegister= false
        },
        setCorrectRegister:(state)=>{
            state.correctRegister= true
            state.errorMessage = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredential, setInitialState, setIncorrectRegister, setCorrectRegister } = authSlice.actions;