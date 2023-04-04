
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAmytbpfHi5eP7IVYQdHI003rg-05Y-e5c",
  authDomain: "tiktok---jornada-dcf53.firebaseapp.com",
  projectId: "tiktok---jornada-dcf53",
  storageBucket: "tiktok---jornada-dcf53.appspot.com",
  messagingSenderId: "492492868061",
  appId: "1:492492868061:web:e17f4f94ee62c85187ce34"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 