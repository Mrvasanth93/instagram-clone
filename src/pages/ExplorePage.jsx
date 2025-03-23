import React from "react";
import Sidenav from "../components/navigation/Sidenav";
import ExploreSection from "../components/explore/ExploreSection";

const ExplorePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <ExploreSection />
      </div>
    </div>
  );
};

export default ExplorePage;
