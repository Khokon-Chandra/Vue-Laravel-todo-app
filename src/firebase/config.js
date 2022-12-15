
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC48OyUaIcs8ZYZ6rhLxZeDG2aN2sngppY",
    authDomain: "blog-8cb65.firebaseapp.com",
    projectId: "blog-8cb65",
    storageBucket: "blog-8cb65.appspot.com",
    messagingSenderId: "403550007413",
    appId: "1:403550007413:web:49a0d1dcfc4ae32853883c",
    measurementId: "G-V10CTWGV7W"
  };

  const app = initializeApp(firebaseConfig);
  const {auth} = getAuth();
  export {auth}