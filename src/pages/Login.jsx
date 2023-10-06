import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <section className="login__section">
      <div className="login__container">
        <h2>Welcome back!</h2>
        <span>We're so excited to see you again!</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
