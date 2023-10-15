
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCyZ7VMpPDo9Wi2ijgiSwse4jVn2eeq2s",
  authDomain: "reddit-clone-e8c73.firebaseapp.com",
  projectId: "reddit-clone-e8c73",
  storageBucket: "reddit-clone-e8c73.appspot.com",
  messagingSenderId: "613637478714",
  appId: "1:613637478714:web:faffb27e421d95e8131803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };