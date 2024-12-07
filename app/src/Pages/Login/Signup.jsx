import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

export const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return handleError("Enter the details");
    }
    if (password.length < 6) {
      return handleError("Password must be at least 6 characters long");
    }

    try {
      const response = await axios.post("http://localhost:5001/auth/signup", {
        email,
        password,
        username,
      });
      if (response.data.success) {
        handleSuccess("Signup Successful!");
        setTimeout(() => {
            navigate("/login");
        }, 2000)
        }
    } catch (err) {
        if (err.response && err.response.data) {
            return handleError(err.response.data.msg || 'Signup Failed, Please try again.');
          }
        handleError("Signup Failed, Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h3>
          SignUp<span>Here</span>
        </h3>
        <form onSubmit={handleSignup}>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUserName(e.target.value)}
              autoFocus
              value={username}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <button type="submit"> SignUp </button>
          </div>
        </form>
        <div className="signup-link">
          <p>Already have an Account?</p>
          <Link className="signup-btn" to={"/login"}>
            Login
          </Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
