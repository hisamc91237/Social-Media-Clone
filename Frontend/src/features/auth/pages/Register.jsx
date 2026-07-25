import React from "react";

const Register = () => {
  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form>
            <input type="text" name="username" placeholder="Enter username" />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
