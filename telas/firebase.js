
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA7Q54MThLa7bpblDI1IeDkfYruubGJqgA",
  authDomain: "fir-auth-4d549.firebaseapp.com",
  projectId: "fir-auth-4d549",
  storageBucket: "fir-auth-4d549.appspot.com",
  messagingSenderId: "956873477747",
  appId: "1:956873477747:web:40567e94ae073564b16406"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
