import fireBaseConfig from "../../firebase.config";
import { initializeApp } from 'firebase/app';
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const app = initializeApp(fireBaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const createAccount = (email, password, info) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user
      const userInfo = {...info, uid: user.uid};
      const userRef = await doc(db, 'users', user.uid);
      await setDoc(userRef, userInfo);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
}

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

const getAccount = async (uid) => {
  const userRef = doc(db, 'users', uid)
  const userInfo = await getDoc(userRef)
  return userInfo.data()
}

const signOutOfApp = () => {
  signOut(auth);
}

const getPic = async (uid) => {
  const imageRef = ref(storage, `profile-pics/${uid}/${uid}-profilepic.png`)
  const imageUrl = getDownloadURL(imageRef);
  return imageUrl;
}

export {createAccount, signIn, signOutOfApp, onAuthStateChanged, getAccount, getPic, auth}
