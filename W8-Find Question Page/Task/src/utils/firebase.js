import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVHCIM1Ue65JmQlqaMbi55GzYzWxDDdH4",
  authDomain: "w8-question-page.firebaseapp.com",
  projectId: "w8-question-page",
  storageBucket: "w8-question-page.appspot.com",
  messagingSenderId: "455331131271",
  appId: "1:455331131271:web:49838e9fea3bd7ff1ded22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
