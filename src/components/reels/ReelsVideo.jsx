import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import useElementOnScreen from '../../hooks/useElementOnScreen';
import './ReelsVideo.css';
import { VolumeMute } from '@mui/icons-material';

function ReelsVideo(props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    threshold: 0.6,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        // videoRef.current.currentTime = 0;
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);
  const handleScroll = (e) => {
    let next = ReactDOM.findDOMNode(e.target).nextSibling
    if(next){
        next.scrollIntoView()
    }
}

  return (
    <div >
      <video
        src={props.src}
        onEnded={handleScroll}
        ref={videoRef}
        
        onClick={onVideoClick}
        className="videos-styling"
        id={props.id}
      />
      <span className='video-container'></span>
      <span className="mute_btn" onClick={() => props.handleMute(videoRef)}>
      <VolumeMute style={{width:30,height:30,
      color:`${props.isMuted?"red":""}`
      }}/>
      </span>
    </div>
  );
}

export default ReelsVideo;
