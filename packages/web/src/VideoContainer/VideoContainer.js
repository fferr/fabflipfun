import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button';
import { useElementOnScreen } from '../hooks/useElementOnScreen';
import './VideoContainer.css';

const VideoContainer = ({ index, loadMoreRef, videoSrc }) => {
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

  const handleClickCTA = () =>
    window.open('https://fabfitfun.com/shop', '_blank');

  const onVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const onMuteButtonClick = () => {
    setMuted((prevState) => !prevState);
  };

  return (
    <div className="video-container" ref={index % 3 === 0 ? loadMoreRef : null}>
      <button onClick={onMuteButtonClick} className="video-mute-button">
        <FontAwesomeIcon icon={muted ? faVolumeOff : faVolumeHigh} />
      </button>
      <video
        className="video"
        loop
        preload="true"
        ref={videoRef}
        onClick={onVideoClick}
        src={`http://localhost:1337${videoSrc}`}
        autoPlay
        data-testid="video-element"
        muted={muted}
      ></video>
      <Button onClick={handleClickCTA}>CTA</Button>
    </div>
  );
};

export default VideoContainer;
