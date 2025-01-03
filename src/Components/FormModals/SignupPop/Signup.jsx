import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="SignUp-pop">
      <form className="form-container">
        <div className="Field">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="email">Your E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your E-mail"
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="signup-link">
        <p>
          Do you already have an account?{" "}
          <span>
            <Link to="../login">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
