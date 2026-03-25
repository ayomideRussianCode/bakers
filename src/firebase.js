// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl-bG_NSe2LUpXpEEZiuKb5VTf6xbDB7o",
  authDomain: "bakers-f233a.firebaseapp.com",
  projectId: "bakers-f233a",
  storageBucket: "bakers-f233a.firebasestorage.app",
  messagingSenderId: "42112168630",
  appId: "1:42112168630:web:906cab1a92bd4c60ceec17",
  measurementId: "G-WQPZPWLVKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
