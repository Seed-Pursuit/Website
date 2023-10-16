import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "seed-pursuit.firebaseapp.com",
  projectId: "seed-pursuit",
  storageBucket: "seed-pursuit.appspot.com",
  messagingSenderId: "161994984072",
  appId: "1:161994984072:web:4e9cce4bcb049a1b46ed3d",
  measurementId: "G-H12SP2TW0X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);