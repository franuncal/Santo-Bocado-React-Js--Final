import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnyrXsUdmk3Sb2BxNwQ_NwFsFYpc2gO1s",
  authDomain: "santo-bocado-55bf8.firebaseapp.com",
  projectId: "santo-bocado-55bf8",
  storageBucket: "santo-bocado-55bf8.appspot.com",
  messagingSenderId: "983488600106",
  appId: "1:983488600106:web:4d8100b046567d48b04b53",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

