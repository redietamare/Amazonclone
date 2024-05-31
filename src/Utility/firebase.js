
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfh5FTddB-Dg21bs92G3ZBGE2N19hINRc",
  authDomain: "clone-a8c42.firebaseapp.com",
  projectId: "clone-a8c42",
  storageBucket: "clone-a8c42.appspot.com",
  messagingSenderId: "697645947392",
  appId: "1:697645947392:web:14d335e088b5426432d6e5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
