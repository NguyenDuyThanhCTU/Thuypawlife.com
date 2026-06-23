import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuXdoEWDLZgPRmZEIxmmmnTiaiPepjxi4",

  authDomain: "thuypawlife.firebaseapp.com",

  projectId: "thuypawlife",

  storageBucket: "thuypawlife.firebasestorage.app",

  messagingSenderId: "603350119889",

  appId: "1:603350119889:web:66c1d4ee8b073153885cf0",

  measurementId: "G-7HH199V0X9",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const auth = getAuth(app);
