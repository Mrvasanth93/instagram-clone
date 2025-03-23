import React from "react";
import Sidenav from "../components/navigation/Sidenav";
import ProfileSection from "../components/profile/ProfileSection";

const ProfilePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfilePage;
