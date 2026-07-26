import React from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passeword, setPassword] = useState("");
  const navigate = useNavigate();

  const { loading, user, handleRegister } = useAuth();

  if (loading) {
    return (
      <main>
        <h1>Loaoding...</h1>
      </main>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister(username, email, passeword);
    console.log("user registered");
    navigate("/");
  };

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter passowrd"
          />
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
