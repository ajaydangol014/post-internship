import React from "react";

const Login = () => {
  return (
    <div className="login-form">
      <div className="login-form-box">
        <div className="login-form-header">
          <h2>Sign In</h2>
        </div>
        <form>
          <div className="input-item">
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="input-item">
            <input type="text" placeholder="Enter Password" />
          </div>
          <div className="remember-pass">
            <input type="checkbox" id="html" />
            <label htmlFor="html">Remember me</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
