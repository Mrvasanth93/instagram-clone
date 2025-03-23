import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";
import { FacebookOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    // if(res.user){
    //   navigate('/')
    // }
  };
  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
      <div className="or__section">
        <span>OR</span>
        <div className="with__face">
          <span style={{ fontWeight: "500" }}>
            <FacebookOutlined /> Log in with Facebook
          </span>

          <span>Forget password?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
