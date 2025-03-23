import React, { useEffect, useState } from "react";
import Sidenav from "../components/navigation/Sidenav";
import ReelsVideo from "../components/reels/ReelsVideo";
import dv1 from "../assets/dv1.mp4";
import dv2 from "../assets/dv2.mp4";
import dv3 from "../assets/dv3.mp4";
import dv4 from "../assets/dv4.mp4";
import "./ReelsPage.css";
import { Avatar } from "@mui/material";
import LikeCommentBar from "../components/reels/LikeCommentBar";
const videoData = [
  {
    id: 1,
    src: dv4,
  },
  {
    id: 2,
    src: dv2,
  },
  {
    id: 3,
    src: dv3,
  },
  {
    id: 4,
    src: dv1,
  },

];
const ReelsPage = () => {
  const [videos, setVideos] = useState(videoData);
  const [isMuted, setIsMuted] = useState(false);

  
  const handleScroll = (e) => {
    let next = e.target.nextSibling;
    if (next) {
      next.scrollIntoView();
      console.log({next})
      e.target.muted = true;
    }
  };

  const handleMute = (videoRef) => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted)
  };
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="reels__timeline">
        <div className="video-container">
            {
                videos.map((data) => (
          <div className="videos">
              <ReelsVideo
          key={data.id}
          src={data.src}
          id={data.id}
          handleScroll={handleScroll}
          handleMute={handleMute}
          isMuted={isMuted}
        />
            <div className="fa" >
            <div className="reel_ava">
            <span>
              <Avatar style={{width:30,height:30}}>A</Avatar>
            </span>
              <h4>Name</h4>
            </div>
              <span className="desc_reel">Some desc</span>
              <span className="desc_reel">Some music</span>
            </div>
            <div>
                <LikeCommentBar/>
            </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsPage;
