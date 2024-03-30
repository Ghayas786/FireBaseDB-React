// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEADFrm_-GIUS9aZYjrRcZM4trpaHbfgw",
  authDomain: "vite-project-fb74c.firebaseapp.com",
  projectId: "vite-project-fb74c",
  storageBucket: "vite-project-fb74c.appspot.com",
  messagingSenderId: "99262232538",
  appId: "1:99262232538:web:a754344416ff2e856632e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)