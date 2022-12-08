import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredential, logout, login } from "./authSlice"

export const checkingAuthentication = (email, password) =>{
    return async (dispatch)=>{
        dispatch(checkingCredential())
    }
}

export const startGoogleSingIn = ()=>{
    return async( dispatch )=>{
        dispatch( checkingCredential() )

        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName  }) =>{
    return async( dispatch ) =>{
        dispatch( checkingCredential() )

        const { ok, uid, photoURL, errorMessage}  = await registerUserWithEmailPassword({email, password, displayName})
        if( !ok ) return dispatch(logout({errorMessage}))
        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassword = ({email, password}) =>{

    return async( dispatch ) =>{
        dispatch (checkingCredential())

        const result =  await loginWithEmailPassword({email, password})

        console.log(result)
        if( !result.ok ) return dispatch(logout(result))
        dispatch(login(result))
    }

}

export const startLogout = ()=>{
    return async( dispatch ) =>{

        const result = await logoutFirebase()
        dispatch(logout())

    }
}
