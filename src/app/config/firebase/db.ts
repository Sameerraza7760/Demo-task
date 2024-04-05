import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
    apiKey: "AIzaSyC3CBW8wlOJ3AprAJyxqzpmoBRit4CaW14",
    authDomain: "fir-ee245.firebaseapp.com",
    projectId: "fir-ee245",
    storageBucket: "fir-ee245.appspot.com",
    messagingSenderId: "867793614561",
    appId: "1:867793614561:web:435c4e7e0fef04999c69a0",
    measurementId: "G-FKV57E30MB"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
