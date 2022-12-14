// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXNjg0i8oDRAa3wYkxM9gxqojlzbnLqgw",
  authDomain: "property-finder-a89d5.firebaseapp.com",
  projectId: "property-finder-a89d5",
  storageBucket: "property-finder-a89d5.appspot.com",
  messagingSenderId: "763109098612",
  appId: "1:763109098612:web:9a580762f5460cf6d7bd21",
  measurementId: "G-WP2NNKVF10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const addSavedListing = async (listing) => {
  console.log(listing);

  let timeStamp = Timestamp.fromDate(new Date());

  console.log(timeStamp);

  const obj = { ...listing, createdAt: timeStamp };
  const res = await addDoc(collection(db, "listings"), obj);
};

const getSavedListings = async (user) => {
  const q = query(collection(db, "listings"), where("user", "==", user.uid));
  const docs = await getDocs(q);
  // console.log(docs);
  let arr = [];
  docs.forEach((doc) => {
    let unix_timestamp = doc.data().createdAt.seconds;
    const date = new Date(unix_timestamp * 1000);
    // console.log(date);
    let data = { ...doc.data(), createdAt: date };
    arr.push(data);
  });

  return arr;
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  addSavedListing,
  getSavedListings,
};
