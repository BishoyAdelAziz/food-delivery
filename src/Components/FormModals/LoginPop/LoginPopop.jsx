import { Link } from "react-router-dom";
import "./LoginPopop.css";
export default function LoginPopup() {
  return (
    <div className="Login-pop">
      <form className="form-Container">
        <div className="Field">
          <label htmlFor="username">UserName - Email:</label>
          <input
            type="text"
            name="userName"
            id="username"
            placeholder="User name or Email"
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" // Corrected typo from "passowrd" to "password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>
          You dont have an account? <Link to="../Signup">Click Here</Link>
        </p>
      </div>
    </div>
  );
}
