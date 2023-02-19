import React, { useEffect, useState } from "react";
import netflixLogo from "../assets/netflix.png";
import avatarImg from "../assets/Avatar.jpeg";
import "./TopNav.css";
import { NavLink } from "react-router-dom";
const TopNav = () => {
  const [showNav, setShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${showNav && "nav__black"}`}>
      <div className="nav__contents">
        <NavLink to="/">
          <img className="nav__logo" src={netflixLogo} alt="netflixLogo" />
        </NavLink>
        <NavLink to="/profile">
          <img className="nav__avatar" src={avatarImg} alt="Avatar" />
        </NavLink>
      </div>
    </div>
  );
};

export default TopNav;
