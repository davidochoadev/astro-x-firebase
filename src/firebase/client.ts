// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const alreadyCreatedAps = getApps();
const firebaseConfig = {
  apiKey: "AIzaSyDqGOK_LMl0zmMkra7s04rQ-A6RAO7QrNU",
  authDomain: "astro-firebase-vercel.firebaseapp.com",
  projectId: "astro-firebase-vercel",
  storageBucket: "astro-firebase-vercel.appspot.com",
  messagingSenderId: "917879747866",
  appId: "1:917879747866:web:c827743af62e1da812a8a3",
  measurementId: "G-D9VS2Y15XT"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);