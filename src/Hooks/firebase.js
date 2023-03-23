import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyALuEJMTVt7vHOxaB3kncWDM4y5FPCnaqg",
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN ,
  projectId:"practicetrelo2",
  storageBucket: "practicetrelo2.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDIND_ID,
  appId:process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
export const storage = getStorage(app)



