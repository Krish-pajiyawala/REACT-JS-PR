// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvA69fJcO8gPN-OTl-Ru2NktpfGQRkptc",
  authDomain: "recipe-book-app-b7cd6.firebaseapp.com",
  projectId: "recipe-book-app-b7cd6",
  storageBucket: "recipe-book-app-b7cd6.firebasestorage.app",
  messagingSenderId: "475714765346",
  appId: "1:475714765346:web:f08510cf818b27555b807b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
