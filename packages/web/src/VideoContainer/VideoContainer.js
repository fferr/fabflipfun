import React, { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from '../hooks/useElementOnScreen';
import './VideoContainer.css';

const VideoContainer = ({ index, loadMoreRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        setIsPlaying(false);
      }
    }
  }, [isVisible]);

  return (
    <div className="video-container" ref={index % 3 === 0 ? loadMoreRef : null}>
      <div className="video" ref={videoRef}>
        {isPlaying ? 'Playing' : 'Not Playing'}
      </div>
    </div>
  );
};

export default VideoContainer;
