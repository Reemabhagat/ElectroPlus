// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMVtwPJy8h97ncM805AVOexgbZpqHRTwA",
  authDomain: "electroplus88-8b2ae.firebaseapp.com",
  projectId: "electroplus88-8b2ae",
  storageBucket: "electroplus88-8b2ae.firebasestorage.app",
  messagingSenderId: "1054220932569",
  appId: "1:1054220932569:web:e3575cb5c07a8a54a875c8",
  measurementId: "G-Y6P3L7HKFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app); 