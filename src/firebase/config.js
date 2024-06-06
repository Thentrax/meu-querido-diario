// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjJQmsbCH5vZPAKL340HuVzKGTCrGaH4s",
  authDomain: "diario-univassouras-2024.firebaseapp.com",
  projectId: "diario-univassouras-2024",
  storageBucket: "diario-univassouras-2024.appspot.com",
  messagingSenderId: "912599477",
  appId: "1:912599477:web:e911363a651e07148fd1fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);