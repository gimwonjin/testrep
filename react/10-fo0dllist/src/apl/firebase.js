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
const reslut = await addDoc(getCollection(collectionName), addObj);
const docSnap = await getDoc(reslut);
const resultData = {...docSnap.data(), docId: docSnap.id};
return resultData;
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
  if (!options.lq) {
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

async function deleteDatas(collectionName, docId, imgUrl) {
  // 스토리지에 있는 이미지를 삭제할 떄 필요한것 ==> 파일명(경로포함)
  // 스토리지 객체 생성
  const storage = getStorage();
  let messag;
  try {
    // 삭제할 파일의 참조객체 생성(ref함수 사용)
    messag = "이미지 삭제에 실패했습니다. \n관리자에게 문의하세요.";
    const deleteRef = ref(storage, imgUrl);
    // 파일 삭제
    await deleteObject(deleteRef);

    messag = "문서 삭제에 실패했습니다. \n관리자에게 문의하세요.";

    // 삭제할 문서의 참조객체 셍성(doc 함수 사용)
    const deleteDocRef = doc(db, collectionName, docId);

    // 문서삭제
    await deleteDoc(deleteDocRef);

    return { result: true, message: messag };
  } catch (error) {
    return { result: false, message: messag };
  }
}

async function updateDatas() {
  console.log("updateDatas 함수 실행")
}

export { addDatas, getDatasOrderByLimit, deleteDatas, updateDatas };
