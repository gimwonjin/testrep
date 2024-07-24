import { initializeApp } from "firebase/app";
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
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDu-pHrwWbv-WAI4wg-Wx-rNshlhYazKdU",
  authDomain: "foodlist-907ff.firebaseapp.com",
  projectId: "foodlist-907ff",
  storageBucket: "foodlist-907ff.appspot.com",
  messagingSenderId: "68119515194",
  appId: "1:68119515194:web:b6191f2c0a00365b48a503",
  measurementId: "G-8LFW6QGN8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getCollection(collectionName) {
  return collection(db, collectionName);
}

function createPath(path) {
  const uuid = crypto.randomUUID();
  return path + uuid;
}

async function addDatas(collectionName, addObj) {
  // 파일저장==> 스토리지의 이미지 url을 addObj의 imgUrl 값으로 변경
  const path = createPath("food/");
  const url = await uploadImge(path, addObj.imgUrl);
  addObj.imgUrl = url;

  // id 생성
  const lastId = (await getLastNum(collectionName, "id")) + 1;
  addObj.id = lastId;

  // 시간 정보 생성
  const time = new Date().getTime();
  addObj.createdAt = time;
  addObj.upaatedAt = time;

  // 컬렉션 저장
  await addDoc(getCollection(collectionName), addObj);
}

async function uploadImge(path, file) {
  const storage = getStorage();
  const imgeRef = ref(storage, path);

  await uploadBytes(imgeRef, file);

  const url = await getDownloadURL(imgeRef);
  return url;
}

async function getLastNum(collectionName, field) {
  const q = query(
    getCollection(collectionName), //
    orderBy(field, "docs"),
    limit(1)
  );
  const lastDoc = await getDocs(q);
  const lastId = lastDoc.docs[0].data()[field];
  return lastId;
}

async function getDatasOrderByLimit(collectionName, options) {
  const { fieldName, limits } = options;
  let q;
  if (!options.l1) {
    q = query(
      getCollection(collectionName),
      orderBy(fieldName, "desc"),
      limit(limits)
    );
  } else {
    q = query(
      getCollection(collectionName),
      orderBy(fieldName, "desc"),
      startAfter(options.lq),
      limit(limits)
    );
  }

  const snapshot = await getDocs(q);
  const docs = snapshot.docs;
  const lastQuery = docs[docs.length - 1];
  const resultData = snapshot.docs.map(function (doc) {
    return { ...doc.data(), docId: doc.id };
  });
  return { resultData, lastQuery };
}

export { addDatas, getDatasOrderByLimit };
