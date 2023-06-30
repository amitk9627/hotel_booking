// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvt_nn0ylY26d_iV0sIHf64zSDkBQ-44I",
  authDomain: "hotelbooking-3ea94.firebaseapp.com",
  projectId: "hotelbooking-3ea94",
  storageBucket: "hotelbooking-3ea94.appspot.com",
  messagingSenderId: "822615248925",
  appId: "1:822615248925:web:706dccd77cb6dd633176f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth , provider};