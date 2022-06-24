// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb-57ZUrbV7-dhhwcsa_5D4VYW4PCsp2Y",
  authDomain: "trulywill-2915d.firebaseapp.com",
  projectId: "trulywill-2915d",
  storageBucket: "trulywill-2915d.appspot.com",
  messagingSenderId: "124769742469",
  appId: "1:124769742469:web:371fcbef55e882846603ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;