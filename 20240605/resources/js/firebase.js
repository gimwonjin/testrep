import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
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
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1lSdQuJZL5JUJhhz7SmZRwfX-FFWEwQQ",
  authDomain: "mibti-bceb5.firebaseapp.com",
  projectId: "mibti-bceb5",
  storageBucket: "mibti-bceb5.appspot.com",
  messagingSenderId: "564084670415",
  appId: "1:564084670415:web:9fd998bfd3ddb7a1b25cba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const collect = await collection(db, collectionName);
  const snapshot = await getDocs(collect);

  return snapshot;
}
async function addDatas(collectionName, dataObj) {
  try {
    // 문서 ID 수동
    // const saveDoc = await doc(db, collectionName, '3');
    // console.log(`doc() 결과: ${saveDoc}`);
    // const saveResult = await setDoc(saveDoc, dataObj);
    // console.log(`setDoc() 결과: ${saveResult}`);

    // 문서 ID 자동
    const collect = await collection(db, collectionName);
    await addDoc(collect, dataObj); // 결과 == undefined
    return true;
  } catch (error) {
    return false;
  }
}

async function deleteDatas(collectionName, docId) {
  const docRef = await doc(db, collectionName, docId);
  await deleteDoc(docRef);
}

async function updateDatas(collectionName, docId, upadteInfoObj) {
  // doc(db,켈렉션명, 문서Id);
  // getDocs(문서레퍼런스);
  // updateDoc(문서데이터, 수정할 정보객체);
  const docRef = await doc(db, collectionName, docId);
  // const docData = await getDoc(docRef);
  await updateDoc(docData, upadteInfoObj);
}

export { db, getDatas, addDatas, deleteDatas, updateDatas };
