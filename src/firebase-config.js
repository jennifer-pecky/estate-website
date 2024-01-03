import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0R0CJcMjEr7AuShKwiK52vLWlaBLGmcw",

  authDomain: "major-realestate.firebaseapp.com",

  projectId: "major-realestate",

  storageBucket: "major-realestate.appspot.com",

  messagingSenderId: "793025941395",

  appId: "1:793025941395:web:bb62946de78d08ecec6266",

  measurementId: "G-XE0T4XN9XL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
