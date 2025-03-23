import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import { Route, Navigate, Routes } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import ProfilePage from "./pages/ProfilePage";
import ReelsPage from "./pages/ReelsPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    // <div className="app">
    //   {isLoading ? (
    //     <div className="loader-container">
    //       <div className="loader"></div>
    //     </div>
    //   ) : (
    //     <>{user ? <Homepage /> : <Authenticate />}</>
    //   )}
    // </div>
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/reels" element={<ReelsPage />} />
            </>
          ) : (
            <Route path="/" element={<Authenticate />} />
          )}
        </Routes>
      )}
    </div>
  );
}

export default App;
