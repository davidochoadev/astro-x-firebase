import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_efOM2pb5DCYwoBQmnPxoPb5whKjURmo",
  authDomain: "astro-x-firebase.firebaseapp.com",
  projectId: "astro-x-firebase",
  storageBucket: "astro-x-firebase.appspot.com",
  messagingSenderId: "371828858188",
  appId: "1:371828858188:web:8a78231199cc98893103e9",
  measurementId: "G-89VZCGR82W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);