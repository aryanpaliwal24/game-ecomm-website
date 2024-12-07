import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        return handleError("Enter the details");
    }
    if (password.length < 6) {
        return handleError("Password is wrong");
    }

    try {
      const response = await axios.post("http://localhost:5001/auth/login", {
        email,
        password,
      });
      console.log("Login response:", response.data);
      const {success,username,jwtToken} = response.data;
      console.log("Loginnn response:", success);
      if(success){
        console.log("............")
        handleSuccess("Login Successful!");
        localStorage.setItem('token' , jwtToken);
        localStorage.setItem('loggedInUser',username);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
    } else {
        handleError("Login Failed")
    }
    } catch (err) {
        console.error("Login error:", err.response || err);
        if (err.response && err.response.data) {
            return handleError(err.response.data.msg || 'Login Failed, Please try again.');
        }
        handleError("Login Failed, Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h3>
          LOGIN<span>Here</span>
        </h3>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div>
            <button type="submit"> Login </button>
          </div>
        </form>
        <div className="signup-link">
          <p>Create a new Account</p>
          <Link className="signup-btn" to={"/signup"}>
            Sign Up
          </Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
