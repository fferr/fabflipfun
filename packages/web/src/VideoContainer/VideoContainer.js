import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useElementOnScreen } from '../hooks/useElementOnScreen';
import './VideoContainer.css';

const VideoContainer = ({ index, loadMoreRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const isVisible = useElementOnScreen(options, videoRef);
  useEffect(() => {
    if (isVisible) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isVisible]);

  const onVideoClick = () => {
    setMuted((prevState) => !prevState);
  };

  return (
    <div className="video-container" ref={index % 3 === 0 ? loadMoreRef : null}>
      <button className="video-mute-button">
        <FontAwesomeIcon icon={muted ? faVolumeOff : faVolumeHigh} />
      </button>
      <video
        className="video_player"
        loop
        preload="true"
        ref={videoRef}
        onClick={onVideoClick}
        src="http://localhost:1337/uploads/INSERTNAMEHERE_b9007ecb98.mp4"
        autoPlay
        muted={muted}
      ></video>
    </div>
  );
};

export default VideoContainer;
