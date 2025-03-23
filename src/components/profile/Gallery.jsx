import React from "react";
import "./ProfileSection.css";
import ProfileGallery from "./ProfileGallery";

const Gallery = ({ profileData }) => {
  return (
    <div className="container">
      <div className="gallery">
        {profileData.map((data, index) => (
          <ProfileGallery
            key={index}
            photo={data.photo}
            likes={data.likes}
            comments={data.comments}
          />
        ))}
      </div>

      <div className="loader"></div>
    </div>
  );
};

export default Gallery;
