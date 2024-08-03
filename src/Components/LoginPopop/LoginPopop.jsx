import React, { useState } from "react";
import "./LoginPopop.css";
import { assets } from "../../assets/assets";
function LoginPopop({ setShowLogin, ShowLogin }) {
  const [current, setCurrent] = useState("SignUp");

  return (
    <div className="LoginPopop">
      <form className="login-popop-container">
        <div className="login-popop-title">
          <h2>{current}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popop-input">
          {current === "LogIn" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your E-mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{current === "SignUp" ? "Create Account" : "LogIn"}</button>
        <div className="login-popop-condition">
          <input type="checkbox" required />
          <p>Am Agree with terms of use & Privacy Policies</p>
        </div>
        {current === "LogIn" ? (
          <p>
            Create An Account ?{" "}
            <span onClick={() => setCurrent("SignUp")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already Have An Account?{" "}
            <span onClick={() => setCurrent("LogIn")}>Log-In</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopop;
