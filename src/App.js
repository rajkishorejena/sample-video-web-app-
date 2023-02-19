import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./pages/LoginScreen";
import ProfilePage from "./pages/ProfilePage";
import { auth } from "./firebase";
import { login, selectUser } from "./redux/features/userSlice";
function App() {
  // const user = null;
  // const user = {
  //   name: "Raj",
  // };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //User logIn
        console.log("Login", userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        console.log("logOut");
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          // <Routes>
          //   <Route path="/" element={<loginScreen />} />
          // </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
