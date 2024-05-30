import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRy1_HpkQxCPpCsB5PVlCZjEsIdgmkdSM",
  authDomain: "myproject-5500b.firebaseapp.com",
  projectId: "myproject-5500b",
  storageBucket: "myproject-5500b.appspot.com",
  messagingSenderId: "166825305008",
  appId: "1:166825305008:web:7bbc2574fa99e3f3deec75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMembers() {
  const collect = await collection(db, "member");
  const snapshot = await getDocs(collect);

  return snapshot;
}

export { db, getMembers };
