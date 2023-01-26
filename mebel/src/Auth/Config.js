// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}  from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAqP5cI3m0hV4xyHKe5Me66w8TqUzogg",
  authDomain: "mebel-auth.firebaseapp.com",
  projectId: "mebel-auth",
  storageBucket: "mebel-auth.appspot.com",
  messagingSenderId: "140319901220",
  appId: "1:140319901220:web:4e7d6fb69ef0a204b6bab1",
  measurementId: "G-X9N57GZD8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
export { Auth, Provider };

