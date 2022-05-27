import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDimeEucPicQplu4LTgwRMK9bofngriMmU",
    authDomain: "debate-app-6b277.firebaseapp.com",
    databaseURL: "https://debate-app-6b277-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "debate-app-6b277",
    storageBucket: "debate-app-6b277.appspot.com",
    messagingSenderId: "450455773050",
    appId: "1:450455773050:web:33eff915b5e779856fc0c3",
    measurementId: "G-B33FV2Y02Q"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default auth
