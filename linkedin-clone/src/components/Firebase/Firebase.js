import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN9i02nDb7vNXQ8NHOsC5OuddW5n3QowY",
  authDomain: "linkedin-540c2.firebaseapp.com",
  projectId: "linkedin-540c2",
  storageBucket: "linkedin-540c2.appspot.com",
  messagingSenderId: "375107871096",
  appId: "1:375107871096:web:c07adddc9c3f46d379688d",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
