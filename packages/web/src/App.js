import './App.css';
import { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import VideoContainer from './VideoContainer/VideoContainer';
import { createSocketConnection } from './api/websocket';
import { getApolloClient, ApolloClientWrapper } from './api/apollo';
import { NewVideoButton } from './NewVideoButton';
import { useVideosQuery } from './api/queries';

createSocketConnection();

function TestComp() {
  const result = useVideosQuery();
  console.log('{data, error, loading}::', result);

  return <div>test</div>;
}

function App() {
  const [videos, setVideos] = useState([1, 2, 3, 4]);
  const [isMuted, setIsMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(0);
  const loadMoreRef = useRef();
  const videosListRef = useRef();

  const apolloClient = getApolloClient();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const loadMoreVideos = useElementOnScreen(options, loadMoreRef);

  const handleClickNewVideo = () => {
    console.log('clicked new video');
    videosListRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (loadMoreVideos) {
      // fetch more videos here
      setVideos((prevState) => [...prevState, 1, 2, 3, 4]);
    }
  }, [loadMoreVideos]);

  const handleClickMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  return (
    <ApolloClientWrapper client={apolloClient}>
      <div className="App">
        <div ref={videosListRef} className="videos-list">
          <TestComp />
          {videos.map((v, index) => (
            <VideoContainer
              index={index}
              loadMoreRef={loadMoreRef}
              key={index}
              isMuted={isMuted}
              handleClickMute={handleClickMute}
              videoPlaying={videoPlaying}
              setVideoPlaying={setVideoPlaying}
            />
          ))}
        </div>
        <NewVideoButton visible onClick={handleClickNewVideo} />
      </div>
    </ApolloClientWrapper>
  );
}

export default App;
