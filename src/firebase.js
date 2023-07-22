// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGKzezVulCOMq4jtNlaIdk64doadhU_OA",
  authDomain: "chat-7bb5a.firebaseapp.com",
  projectId: "chat-7bb5a",
  storageBucket: "chat-7bb5a.appspot.com",
  messagingSenderId: "160247486283",
  appId: "1:160247486283:web:2c789179b8383ccaa33ace"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();