import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { setFantasyTeams } from "../fantasy/fantasySlice"
import { checkingCredential, logout, login, setIncorrectRegister, setCorrectRegister } from "./authSlice"

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
        const { ok, uid, photoURL, errorMessage}  = await registerUserWithEmailPassword({email, password, displayName})
        if( !ok ) {
            dispatch(logout({errorMessage}))
            dispatch(setIncorrectRegister())
            return 
        }
        else{
            dispatch(logout())
            dispatch(setCorrectRegister())
        }
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

        await logoutFirebase()
        dispatch(logout())

    }
}

export const startFantasyTeams = ( ) =>{
    return async( dispatch, getState ) =>{

        // const { uid } = getState().auth;
        
        // if( !uid ) throw new Error('El UID del usuario no existe')

        const fantasyTeams =  JSON.parse( localStorage.getItem('fantasyTeams')) || [];
        
        console.log(fantasyTeams)

        dispatch(setFantasyTeams(fantasyTeams))

    }
}
