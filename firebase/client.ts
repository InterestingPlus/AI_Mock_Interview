import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrlhnsc9YOHNEZYCLZ0FrzEN0sPYKn4h0",
  authDomain: "prepwise-c3ac4.firebaseapp.com",
  projectId: "prepwise-c3ac4",
  storageBucket: "prepwise-c3ac4.firebasestorage.app",
  messagingSenderId: "422527146300",
  appId: "1:422527146300:web:f5e9b87ed9577ad255a639",
  measurementId: "G-ZZP5ENM20P",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
