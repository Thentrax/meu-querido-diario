import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjJQmsbCH5vZPAKL340HuVzKGTCrGaH4s",
  authDomain: "diario-univassouras-2024.firebaseapp.com",
  projectId: "diario-univassouras-2024",
  storageBucket: "diario-univassouras-2024.appspot.com",
  messagingSenderId: "912599477",
  appId: "1:912599477:web:e911363a651e07148fd1fc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);