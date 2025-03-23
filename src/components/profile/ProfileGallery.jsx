import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const ProfileGallery = ({ photo, likes, comments }) => {
  return (
    <div className="gallery-item" tabIndex="0">
      <img src={photo} className="gallery-image" alt="" />

      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <span className="visually-hidden">Likes:</span>
            <i className="mui-icon" aria-hidden="true">
              <FavoriteIcon />
            </i>{" "}
            {likes}
          </li>
          <li className="gallery-item-comments">
            <span className="visually-hidden">Comments:</span>
            <i className="mui-icon" aria-hidden="true">
              <ChatBubbleIcon />
            </i>{" "}
            {comments}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileGallery;
