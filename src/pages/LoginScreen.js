import React, { useState } from "react";
import "./LoginScreen.css";
import NetflixLogo from "../components/assets/netflix.png";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src={NetflixLogo}
          alt="Netflix Logo"
        />
        <button
          className="loginScreen__button"
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {isSignIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films,TV Programmes and more.</h1>
            <h2>Watch any where, Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your Email to create or restart your
              membership
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="Email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setIsSignIn(true)}
                >
                  GAT STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
