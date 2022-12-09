import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider =  new GoogleAuthProvider();

export const signInWithGoogle =  async()=>{

    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } =  result.user;

        console.log(result.user)
        return{
            ok:true,
            //User nfo
            displayName,
            email,
            photoURL,
            uid
        }

    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok:false,
            errorMessage
        }
    }

}

export const registerUserWithEmailPassword = async( {email, password, displayName} ) =>{
    try{
       const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
       const { uid, photoURL  } = resp.user

        await updateProfile( FirebaseAuth.currentUser, { displayName } );

       return{
        ok:true,
        uid, photoURL, email, displayName
       }

    }
    catch(error){
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}

export const loginWithEmailPassword = async({ email, password })=>{
    const em =email
    try{
        const result = await signInWithEmailAndPassword(FirebaseAuth, em, password)
        const { displayName, email, photoURL, uid } =  result.user;

        return{
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    }
    catch(error){
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}

export const logoutFirebase = async ()=>{
    return await FirebaseAuth.signOut();
}