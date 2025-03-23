import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Crop54Icon from '@mui/icons-material/Crop54';
import './LikeCommentBar.css'
const LikeCommentBar = () => {
  return (
    <div>
        <div className="likebar__footerIcons">
          <div className="likebar__iconsMain">
            <FavoriteBorderIcon className="likebarIcon" fontSize="inherit" />
            <span>likes</span>
            <ChatBubbleOutlineIcon className="likebarIcon" fontSize="inherit" />
            <span>1301</span>
            <TelegramIcon className="likebarIcon" fontSize="inherit" />
            <BookmarkBorderIcon className="likebarIcon" fontSize="inherit" />
            <MoreHorizIcon className="likebarIcon" fontSize="inherit" />
            <Crop54Icon className="likebarIcon" fontSize="inherit" />
          </div>
         
          
        </div>
    </div>
  )
}

export default LikeCommentBar