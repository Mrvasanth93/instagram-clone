import React from "react";
import "./GalleryCard.css";
const GalleryCard = ({ user, postImage, likes }) => {
  return (
    <div className="card">
      <img className="" src={postImage} alt={user} />
    </div>
  );
};

export default GalleryCard;
