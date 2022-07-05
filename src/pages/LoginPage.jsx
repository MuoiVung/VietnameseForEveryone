import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section>
      <h1>LoginPage</h1>
      <p>
        <button>Login</button>
      </p>
      <p>or</p>
      <p>
        <Link to="/lessons">Get started!</Link>
      </p>
    </section>
  );
};

export default LoginPage;
