import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4LCotP4G7paVX2DDtWsLL3T-aIDJkV-s",
  authDomain: "netflix-clone-c7c0f.firebaseapp.com",
  projectId: "netflix-clone-c7c0f",
  storageBucket: "netflix-clone-c7c0f.appspot.com",
  messagingSenderId: "209623875948",
  appId: "1:209623875948:web:d5515925d9870dc4687349",
  measurementId: "G-Z84JD0DZEF",
};
//declaring and initiazlizing firebase app
const firebaseApp = initializeApp(firebaseConfig);
//firestore is a realtime db that is gonna help us keep track of subsriptions
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword };
export default db;
