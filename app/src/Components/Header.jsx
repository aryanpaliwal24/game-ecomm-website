import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../Assests/mainlogo.png";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("loggedInUser");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <img src={Logo} alt="Server Logo" className="center" />
        <nav>
          <li>
            <Link
              to={"/cart"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <FiShoppingCart size={20} />
            </Link>
          </li>
          <li>
            <Link
              to={"/home"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/product"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={"/todo"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Todo
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Contact
            </Link>
          </li>
          {token ? (
            <li className="dropdown">
              <button
                className="dropbtn"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <FaRegUserCircle size={18} />
              </button>
              <div className="dropdown-content">
                <h2 className="dropdown-text">{username}</h2>
                <Link
                  className="dropdown-text"
                  to={"/login"}
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </li>
          ) : (
            <li>
              <Link
                to={"/login"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Login
              </Link>
            </li>
          )}
        </nav>
      </header>
    </div>
  );
};
