import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyALuEJMTVt7vHOxaB3kncWDM4y5FPCnaqg",
  authDomain: "practicetrelo2.firebaseapp.com",
  projectId: "practicetrelo2",
  storageBucket: "practicetrelo2.appspot.com",
  messagingSenderId: "73750992093",
  appId: "1:73750992093:web:cfbbcf1c710e3c78c3f734"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)