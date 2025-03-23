import React from "react";
import "./Homepage.css";
import Sidenav from "../components/navigation/Sidenav";
import Timeline from "../components/timeline/Timeline";
import Status from "../components/status/Status";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
