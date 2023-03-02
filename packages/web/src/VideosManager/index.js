import VideoContainer from '../VideoContainer/VideoContainer';
import { sanitizeVideoQueryData, useVideosQuery } from '../api/queries';
import { useEffect } from 'react';

export function VideosManager({
  videosListRef,
  loadMoreRef,
  isMuted,
  handleClickMute,
  videoPlaying,
  setVideoPlaying,
  handleNewVideoDetected,
}) {
  const { loading, error, data, previousData } = useVideosQuery();

  useEffect(() => {
    // meaning that there is a new video, so we show the button
    if (
      previousData &&
      data &&
      previousData.videos.data.length < data.videos.data.length
    ) {
      handleNewVideoDetected();
    }
  }, [data, previousData]);

  if (error) {
    console.error('Failed to load videos', error);
    return null;
  }

  if (loading) return 'loading...';

  const videos = sanitizeVideoQueryData(data);
  if (!videos.length) return null;

  return (
    <div ref={videosListRef} className="videos-list">
      {videos.map((video, index) => (
        <VideoContainer
          index={index}
          loadMoreRef={loadMoreRef}
          key={index}
          isMuted={isMuted}
          handleClickMute={handleClickMute}
          videoPlaying={videoPlaying}
          setVideoPlaying={setVideoPlaying}
          videoSrc={video.media.url}
          brand={video.product.brand}
          description={video.product.description}
          price={video.product.price}
          imageSrc={video.productImage}
          id={video.id}
        />
      ))}
    </div>
  );
}
