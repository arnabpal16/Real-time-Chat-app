
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALxn5XNlcCR38nCWeiBi3z_ls6Vf1BMak",
  authDomain: "chat-app-react-2d026.firebaseapp.com",
  projectId: "chat-app-react-2d026",
  storageBucket: "chat-app-react-2d026.appspot.com",
  messagingSenderId: "708774756300",
  appId: "1:708774756300:web:4d34d6f6dcaf32d28ae769"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db=getFirestore(app)