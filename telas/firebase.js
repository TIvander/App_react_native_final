// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Q54MThLa7bpblDI1IeDkfYruubGJqgA",
  authDomain: "fir-auth-4d549.firebaseapp.com",
  projectId: "fir-auth-4d549",
  storageBucket: "fir-auth-4d549.appspot.com",
  messagingSenderId: "956873477747",
  appId: "1:956873477747:web:40567e94ae073564b16406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);