import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "../styles/Login.css";
import google from "../images/google.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Firebase configuration
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
  }, [navigate, auth]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("Logged in user:", user);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Logged in with Google:", user);

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="login__section">
      <div className="login__container">
        <h2>Welcome back!</h2>
        <span>We're so excited to see you again!</span>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
        <div className="google__login">
          <button onClick={handleGoogleLogin}>
            {" "}
            <img src={google} alt="google" width={30} />
            Log in with Google
          </button>
        </div>
        <div className="demo__container">
          <p>
            Email: <span className="demo">firebase-demo@gmail.com</span>
          </p>
          <p>
            Password: <span>firebase1995</span>
          </p>
        </div>

        {error && <p>{error}</p>}
      </div>
    </section>
  );
}

export default Login;
