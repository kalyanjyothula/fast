// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOVkrwOmEeOPdxP9yJ1xMchMB1rgF-dOo",
  authDomain: "fast-e3b8e.firebaseapp.com",
  projectId: "fast-e3b8e",
  storageBucket: "fast-e3b8e.appspot.com",
  messagingSenderId: "468259213856",
  appId: "1:468259213856:web:19678b7b80dd38b0e9a245",
  measurementId: "G-YWRLE0KVQS",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// export const auth = firebase.auth();
