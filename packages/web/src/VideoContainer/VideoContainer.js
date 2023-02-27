import React, { useState, useRef, useEffect } from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';
import './VideoContainer.css'

const VideoContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};
const isVisible = useElementOnScreen(options, videoRef)
useEffect(() => {
  if (isVisible) {
    if (!isPlaying) {        
      setIsPlaying(true)
    }
  }
  else {
    if (isPlaying) {        
      setIsPlaying(false)
    }
  }
}, [isVisible]);

console.log(isVisible, 'is visible');

  return (
    <div className="video-container">
      <div className="video" ref={videoRef}>{isPlaying ? 'Playing' : 'Not Playing'}</div>
    </div>
  )
}


export default VideoContainer;