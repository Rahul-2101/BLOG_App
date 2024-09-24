// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rahul-s-blog.firebaseapp.com",
  projectId: "rahul-s-blog",
  storageBucket: "rahul-s-blog.appspot.com",
  messagingSenderId: "606621307241",
  appId: "1:606621307241:web:bb2d61eb1c544d7e502df8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
