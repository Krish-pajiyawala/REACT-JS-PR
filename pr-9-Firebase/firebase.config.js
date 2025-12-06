// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWYTgxIjKxtyTfEkxXhb2NMkB_zJe1ov0",
  authDomain: "mytra-api.firebaseapp.com",
  projectId: "mytra-api",
  storageBucket: "mytra-api.firebasestorage.app",
  messagingSenderId: "419397640918",
  appId: "1:419397640918:web:5fc15da6b89dd52f8c9f77",
  measurementId: "G-NB8T1WH142"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);