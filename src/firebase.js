import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmuhsqYrFpJRTVx2ANFPh-uHkcaqUukFk",
  authDomain: "arpit-react-portfolio.firebaseapp.com",
  projectId: "arpit-react-portfolio",
  storageBucket: "arpit-react-portfolio.appspot.com",
  messagingSenderId: "534522175432",
  appId: "1:534522175432:web:9e6b75eab76d874e5d2afd"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();