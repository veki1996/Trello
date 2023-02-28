import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN ,
  projectId:"practicetrelo2",
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDIND_ID,
  appId:process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)