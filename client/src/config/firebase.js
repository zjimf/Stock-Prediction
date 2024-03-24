// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxw4nHFeI32TcAULODMs0_qXnPjYdFe64",
  authDomain: "stock-prediction-525cd.firebaseapp.com",
  projectId: "stock-prediction-525cd",
  storageBucket: "stock-prediction-525cd.appspot.com",
  messagingSenderId: "142611866177",
  appId: "1:142611866177:web:ef8477f7aa680e6cfe1cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provide = new GoogleAuthProvider();