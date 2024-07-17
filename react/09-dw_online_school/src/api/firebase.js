import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnorhA8AivncBsJtA4A_0g_ZOKaWpuANg",
  authDomain: "dwos-a8465-81040.firebaseapp.com",
  projectId: "dwos-a8465-81040",
  storageBucket: "dwos-a8465-81040.appspot.com",
  messagingSenderId: "126409456847",
  appId: "1:126409456847:web:a62b4eac36b03de725cbba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const collect = collection(db, collectionName);
  const snapshot = await getDocs(collect);
  const resultData = snapshot.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));

  return resultData;
}

export { getDatas };
