import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button';
import { useElementOnScreen } from '../hooks/useElementOnScreen';
import './VideoContainer.css';

const VideoContainer = ({
  index,
  loadMoreRef,
  isMuted,
  handleClickMute,
  videoPlaying,
  setVideoPlaying,
  videoSrc,
}) => {
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const isVisible = useElementOnScreen(options, videoRef);
  const isPlaying = videoPlaying === index;

  const handleClickCTA = () =>
    window.open('https://fabfitfun.com/shop', '_blank');

  const onVideoClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setVideoPlaying(index);
    }
    if (isPlaying) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
      setVideoPlaying(index);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="video-container" ref={index % 3 === 0 ? loadMoreRef : null}>
      <button onClick={handleClickMute} className="video-mute-button">
        <FontAwesomeIcon icon={isMuted ? faVolumeOff : faVolumeHigh} />
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
        muted={isMuted}
      ></video>
      <Button onClick={handleClickCTA}>CTA</Button>
    </div>
  );
};

export default VideoContainer;
