// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth'; 
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCseu_bzOsAx-ogosHHyfc7C3HdPJsoaAc",
  authDomain: "fantasy-team-32027.firebaseapp.com",
  projectId: "fantasy-team-32027",
  storageBucket: "fantasy-team-32027.appspot.com",
  messagingSenderId: "593933615312",
  appId: "1:593933615312:web:4bdf8c523e173671a05ed5",
  measurementId: "G-PYQKQ10XXN"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth =  getAuth(FireBaseApp);
export const FirebaseDB   = getFirestore(FireBaseApp);
