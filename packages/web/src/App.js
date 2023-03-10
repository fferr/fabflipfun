import './App.css';
import { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import { getApolloClient, ApolloClientWrapper } from './api/apollo';
import { NewVideoButton } from './NewVideoButton';
import { VideosManager } from './VideosManager';
import { createSocketConnection } from './api/websocket';

const apolloClient = getApolloClient();
createSocketConnection(process.env.REACT_APP_WS_URL, () => apolloClient);

function App() {
  const [videos, setVideos] = useState([1, 2, 3, 4]);
  const [isMuted, setIsMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(0);
  const [newVideosReady, setNewVideosReady] = useState(false);
  const loadMoreRef = useRef();
  const videosListRef = useRef();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const loadMoreVideos = useElementOnScreen(options, loadMoreRef);

  const handleClickNewVideo = () => {
    console.log('clicked new video');
    setNewVideosReady(false);
    videosListRef.current.scrollIntoView();
  };

  const handleNewVideoDetected = () => {
    setNewVideosReady(true);
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
        <VideosManager
          loadMoreRef={loadMoreRef}
          videosListRef={videosListRef}
          isMuted={isMuted}
          handleClickMute={handleClickMute}
          videoPlaying={videoPlaying}
          setVideoPlaying={setVideoPlaying}
          handleNewVideoDetected={handleNewVideoDetected}
        />
        <NewVideoButton
          visible={newVideosReady}
          onClick={handleClickNewVideo}
        />
      </div>
    </ApolloClientWrapper>
  );
}

export default App;
