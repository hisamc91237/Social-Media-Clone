import React from "react";
import "../style/form.scss";

const Login = () => {
  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form>
            <input type="text" name="username" placeholder="Enter username" />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
