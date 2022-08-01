// ------------------------------ Import Section ------------------------------
// imort the firebase collection of tools as "App"
import { initializeApp } from "firebase/app";

// import firestore methods : Get-> to create firestore instance, Doc-> to retrive docs
// getDoc & setDoc to operate the documents' data
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// import the "Firebase Auth" library
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// ------------------------------ Configuration Section ------------------------------

// Firebase "App" configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR53Uq3QjMHiinLdkkswB_yIuIOQpCCFw" /*Not a secret */,
  authDomain: "crown-clothes-d.firebaseapp.com",
  projectId: "crown-clothes-d",
  storageBucket: "crown-clothes-d.appspot.com",
  messagingSenderId: "292727571717",
  appId: "1:292727571717:web:5e4675d8a75fb6f7e0e36c",
};

// ------------------------------ Authentication Section ------------------------------
// Initialize the Firebase instanse to control the CRUD operations
const firebaseApp = initializeApp(firebaseConfig);

// Initialize the provider of Google Auth : 1 of many usages of Google Auth
// It's a class from firebase auth which can be used to create multi providers
const provider = new GoogleAuthProvider();

// How to act when somebody interact with provider
provider.setCustomParameters({ prompt: "select_account" });

// The way the app authenticate with firebase : It's a func because its the same at all times
export const auth = getAuth();

// Export Signing with Google-Popup function
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Export Signing In with Email & Password function
export const signUpWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Export Signing In with Email & Password function
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Export Signing Out function
export const signOutUser = async () => {
  return await signOut(auth);
};

// Export Auth changing Listener function
export const authChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// ------------------------------ Firestore DB Section ------------------------------

// Initialize firestore DB
export const db = getFirestore();

// A function to create || add collections & documents
export const addCollectionAndDocument = async (
  collectionKey,
  objetsToAdd,
  field
) => {
  // Check if a the collection exists & ifn't create one
  const collectionRef = collection(db, collectionKey);

  // Allows us to attach a set of different writes, deletes, sets, and when we're ready to fire off the batch does the actual transaction begin.
  const batch = writeBatch(db);

  // A loop for each Obj in the data we'll store
  objetsToAdd.forEach((obj) => {
    // It tells which DB we'll use - we add the field as param to make the func generic
    const docRef = doc(collectionRef, obj[field].toLowerCase());
    // Choose a location to set each Obj
    batch.set(docRef, obj);
  });
  // Waiting for the async action to complete
  await batch.commit();
};

// A function to get documents of "Categories"
export const getCategoriesAndDocuments = async () => {
  // Check if a the collection exists & ifn't create one
  const collectionRef = collection(db, "categories");
  // ---------------------
  const q = query(collectionRef);

  // Fetch the documents snapshot
  const querySnapShot = await getDocs(q);

  // Access an arrary of the different documents snapshoots
  // Return the DB in a form of OBJ
  return querySnapShot.docs.map((docSnapshot) => docSnapshot.data());
};

// Creating a user Document from "userAuthObj"
export const createUserDoc = async (userAuth, addInfo = {}) => {
  // Creating a Doc ref with 3 prams [The DB, The collection name, A unique id]
  const userDocRef = doc(db, "users", userAuth.uid);

  // Creating a snapshot from the DocRef to be able to test if it exists
  const userSnapshot = await getDoc(userDocRef);

  // If the user Doc doesn't exist then create new one
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // addInfo is empty obj that can be field with display name incease it didn't exist in the useAuth obj
      await setDoc(userDocRef, { displayName, email, createdAt, ...addInfo });
    } catch (e) {
      console.log("Creating user document encountered an error", e);
    }
  }

  // If the user Doc exists
  return userDocRef;
};
