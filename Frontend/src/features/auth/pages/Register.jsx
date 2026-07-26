import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="text" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter passowrd" />
          <button className="button primary-button">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login to account.</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
