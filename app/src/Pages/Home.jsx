import React, { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import Image1 from "../Assests/keyboard.jpg";
import Image2 from "../Assests/headphones-red-black-dark.jpg";
import Image3 from "../Assests/console.jpg";
import { Footer } from "../Components/Footer";

export const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="heading">
          Hey {loggedInUser}! Welcome to DarkSiders Store
        </h1>
        <p>
          At DarkSiders, we pride ourselves on offering a diverse selection of
          both new and pre-owned games, consoles, and accessories at affordable
          prices. Our streamlined process for buying and selling ensures a
          hassle-free experience for our customers, while our competitive
          pricing and strict quality assurance for pre-owned items have earned
          us the trust of the gaming community.
        </p>
        <div className="home-menu">
          <div className="home-items">
            <img src={Image1} alt="Keyboard Image" className="home-image" />
            <div className="home-text">
              <h3>
                <span>"Level Up Your Gaming Experience"</span>
                <br /> With Our Top-Rated Consoles, Latest Games, and
                High-Performance Accessories. Whether you're a casual player or
                a pro, find everything you need to dominate the gaming world at
                unbeatable prices. <i>Shop now!</i>
              </h3>
            </div>
            <Link to={"/cart"} className="view-btn">
              View Details
            </Link>
          </div>
          <div className="home-items">
            <img src={Image2} alt="Headphones Image" className="home-image" />
            <div className="home-text">
              <h3>
                <span>"Get Ready to Unleash Your Full Gaming Potential!"</span>
                <br /> Explore the best of consoles, accessories, and exclusive
                deals that will elevate your gaming experience. Upgrade your
                setup and play like never before!
              </h3>
            </div>
            <Link to={"/cart"} className="view-btn">
              View Details
            </Link>
          </div>
          <div className="home-items">
            <img src={Image3} alt="Console Image" className="home-image" />
            <div className="home-text">
              <h3>
                <span>"Ready for Epic Gaming?"</span>
                <br />
                Browse through the latest games, consoles, and accessories
                tailored for every gamer.We have everything to make your gaming
                experience unforgettable.
                <br />
                <i>Shop now and power up!</i>
              </h3>
            </div>
            <Link to={"/product"} className="view-btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
