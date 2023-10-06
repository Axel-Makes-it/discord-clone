import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdf44Gx3D6p_BHSiX5UqOA-hJG3wdJ2Ac",
  authDomain: "discord-chat-a3e1f.firebaseapp.com",
  projectId: "discord-chat-a3e1f",
  storageBucket: "discord-chat-a3e1f.appspot.com",
  messagingSenderId: "383434851633",
  appId: "1:383434851633:web:3c8e6ca2008bef2f955c10",
  measurementId: "G-25717733KY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
