import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
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
  id,
  brand,
  description,
  price,
  imageSrc,
}) => {
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
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
      setVideoPlaying(null);
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
      <div className="video-product-details">
        <div className="video-product-image-container" onClick={handleClickCTA}>
          <img
            src={`http://localhost:1337${imageSrc}`}
            alt={`product-${id}`}
          ></img>
        </div>
        <div>
          <p className="video-product-name" onClick={handleClickCTA}>
            {brand}
          </p>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
