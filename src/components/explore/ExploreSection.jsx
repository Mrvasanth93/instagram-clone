import React, { useState } from "react";
import "./ExploreSection.css";
import postDatas from "../../constants/posts";

import profileGalleryData from "../../constants/profileGallery";
import Gallery from "../profile/Gallery";
const ExploreSection = () => {
  const [posts, setPosts] = useState(postDatas);
  const [profileData, setProfileData] = useState(profileGalleryData);
  return (
    <>
      <div className="explore">
        <Gallery profileData={profileData} />
      </div>
    </>
  );
};

export default ExploreSection;
