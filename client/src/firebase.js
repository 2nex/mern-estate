// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "smith-estate-73b4f.firebaseapp.com",
  projectId: "smith-estate-73b4f",
  storageBucket: "smith-estate-73b4f.appspot.com",
  messagingSenderId: "171656702896",
  appId: "1:171656702896:web:06ab4cd39ef6e9d5218475"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);