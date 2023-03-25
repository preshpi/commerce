// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZtfYR95Y-ZRbRHGQTvYhYneB4Rzq3fAY",
  authDomain: "e-commerce-2bb56.firebaseapp.com",
  projectId: "e-commerce-2bb56",
  storageBucket: "e-commerce-2bb56.appspot.com",
  messagingSenderId: "627206445507",
  appId: "1:627206445507:web:ced26e7bc476dec60a8576",
  measurementId: "G-VJY4N59JBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
