import VideoContainer from '../VideoContainer/VideoContainer';
import { sanitizeVideoQueryData, useVideosQuery } from '../api/queries';

export function VideosManager({
  videosListRef,
  loadMoreRef,
  isMuted,
  handleClickMute,
  videoPlaying,
  setVideoPlaying,
}) {
  const { loading, error, data } = useVideosQuery();
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
