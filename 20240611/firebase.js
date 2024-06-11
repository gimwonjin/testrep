const firebaseConfig = {
  apiKey: "AIzaSyDRy1_HpkQxCPpCsB5PVlCZjEsIdgmkdSM",
  authDomain: "myproject-5500b.firebaseapp.com",
  projectId: "myproject-5500b",
  storageBucket: "myproject-5500b.appspot.com",
  messagingSenderId: "166825305008",
  appId: "1:166825305008:web:7bbc2574fa99e3f3deec75",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function getDatas(collectionName) {
  const querySnapshot = await db.collection(collectionName).get();
  return querySnapshot;
}
async function addDatas(collectionName, addObj) {
  const result = await db.collection(collectionName).add(addObj);
  return result;
}

async function deleteDatas(collectionName, docId) {
  try {
    await db.collection(collectionName).doc(docId).delete();
    return true;
  } catch (error) {
    return false;
  }
}

async function updateDatas(collectionName, docId, updateObj) {
  await db.collection(collectionName).doc(docId).update(updateObj);
}
