import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { config } from "./firebase/config";

function initialize() {
   const firebaseApp = initializeApp(config.firebase);
   const auth = getAuth(firebaseApp);
   const firestore = getFirestore(firebaseApp);
   
   if(location.hostname === "localhost"){
      connectAuthEmulator(auth, "http://localhost:9099");
      connectFirestoreEmulator(firestore, 'localhost', 8080);
   }

   return {firebaseApp, auth, firestore}
}