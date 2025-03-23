import React, { useState } from "react";
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authenticate">
      {active == "login" && (
        <div className="auth__left">
          <img
            src="https://i.imgur.com/P3Vm1Kq.png"
            alt="Instagram Screenshots"
          />
        </div>
      )}
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
        <div className="get__app">
          <span>Get the app</span>
          <div className="app_links">
            <a
              aria-label="Get it on Google Play"
              href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=ig_mid%3D55E5125B-2C02-42EA-9773-CD8FE662EB56%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
              rel="nofollow noreferrer"
              role="link"
              tabindex="0"
              target="_blank"
            >
              <img
                alt="Get it on Google Play"
                style={{ height: "40px" }}
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              />
            </a>

            <a
              aria-label="Get it from Microsoft"
              href="ms-windows-store://pdp/?productid=9nblggh5l9xt&amp;referrer=appbadge&amp;source=www.instagram.com&amp;mode=mini&amp;pos=0%2C0%2C1366%2C728"
              rel="nofollow noreferrer"
              role="link"
              tabindex="0"
              target="_blank"
            >
              <img
                alt="Get it from Microsoft"
                style={{ height: "40px" }}
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
