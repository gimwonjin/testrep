import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
  getDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  where,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBN-E15DnO1IA0NLmPwAYE6Je646Dhw8po",
  authDomain: "chatting-fff98.firebaseapp.com",
  projectId: "chatting-fff98",
  storageBucket: "chatting-fff98.appspot.com",
  messagingSenderId: "619850030970",
  appId: "1:619850030970:web:045a498152081be22b80c3",
  measurementId: "G-3HYRTXWVJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function getCollection(collectionName) {
  return collection(db, collectionName);
}

function getUserAuth() {
  return auth;
}
export { getUserAuth };
