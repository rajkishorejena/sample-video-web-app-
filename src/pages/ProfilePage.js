import React from "react";
import "./ProfilePage.css";
import TopNav from "../components/Navbar/TopNav";
import avatarImg from "../components/assets/Avatar.jpeg";
import Plans from "../components/Plans/Plans";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { selectUser, logout } from "../redux/features/userSlice";
import { auth } from "../firebase";

const ProfilePage = () => {
  // const Email = "helloUser@gmail.com";
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="profilePage">
      <TopNav />
      <div className="profilePage__body">
        <h1>Edit ProfilePage</h1>
        <div className="profilePage__info">
          <img src={avatarImg} alt="Avatar" />
          <div className="profilePage__details">
            <h2>{user.email}</h2>
            <div className="profilePage__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => {
                  // const response = signOut(auth);
                  // console.log("signOutResponse", response);
                  signOut(auth);
                  dispatch(logout());
                }}
                className="profilePage__signOut__button"
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
