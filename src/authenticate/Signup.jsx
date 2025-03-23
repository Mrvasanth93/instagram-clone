import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { FacebookOutlined } from "@mui/icons-material";

function Signup() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="logo"
      />
      <span className="desc__text">
        Sign up to see photos and videos from your friends.
      </span>
      <button className="signup__face">
        <span>
          <FacebookOutlined /> Log in with Facebook
        </span>
      </button>
      <span className="sior__section">OR</span>

      <input
        onChange={(e) => setFname(e.target.value)}
        type="text"
        placeholder="FullName"
        value={fname}
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <span className="learn__more">
        People who use our service may have uploaded your contact information to
        Instagram.
        <span
          style={{ color: "darkblue", fontWeight: "600", cursor: "pointer" }}
        >
          {" "}
          Learn More
        </span>
      </span>
      <span className="learn__more">
        By signing up, you agree to our Terms ,
        <span
          style={{ color: "darkblue", fontWeight: "600", cursor: "pointer" }}
        >
          {" "}
          Privacy Policy{" "}
        </span>
        and
        <span
          style={{ color: "darkblue", fontWeight: "600", cursor: "pointer" }}
        >
          {" "}
          Cookies Policy{" "}
        </span>
        .
      </span>
      <button className="signup__btn" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
