// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Zg3hmyzXYksqPhbjuh4oxCxG5JKxuhw",
  authDomain: "linkedin-project-ffaca.firebaseapp.com",
  projectId: "linkedin-project-ffaca",
  storageBucket: "linkedin-project-ffaca.appspot.com",
  messagingSenderId: "855313185161",
  appId: "1:855313185161:web:7ee4256b14ae8789e58958",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore };
