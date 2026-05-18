import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCssMD1e9COZXvzOROBvJJxeWVKT5UXeD4",
  authDomain: "silver-bank-db719.firebaseapp.com",
  projectId: "silver-bank-db719",
  storageBucket: "silver-bank-db719.firebasestorage.app",
  messagingSenderId: "935435409402",
  appId: "1:935435409402:web:dc014967475fec7a987643"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;