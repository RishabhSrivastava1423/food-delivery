import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAF6M5i-eH2xdGutowsrGtcmGv2yyJBaFQ",
  authDomain: "food-delivery-2c0d4.firebaseapp.com",
  databaseURL: "https://food-delivery-2c0d4-default-rtdb.firebaseio.com",
  projectId: "food-delivery-2c0d4",
  storageBucket: "food-delivery-2c0d4.appspot.com",
  messagingSenderId: "172353312856",
  appId: "1:172353312856:web:2673dde7a8420547f5922d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};