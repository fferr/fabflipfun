import './App.css';
import { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import {  createApolloClient, ApolloClientWrapper } from 'commons';
import { NewVideoButton } from './NewVideoButton/index.jsx';
import { VideosManager } from './VideosManager/index.jsx';

function App() {
  const [videos, setVideos] = useState([1, 2, 3, 4]);
  const [isMuted, setIsMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(0);
  const loadMoreRef = useRef();
  const videosListRef = useRef();

  const client = createApolloClient(`http://localhost:1337/graphql`);

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
    <ApolloClientWrapper client={client}>
      <div className="App">
        <VideosManager
          loadMoreRef={loadMoreRef}
          videosListRef={videosListRef}
          isMuted={isMuted}
          handleClickMute={handleClickMute}
          videoPlaying={videoPlaying}
          setVideoPlaying={setVideoPlaying}
        />
        <NewVideoButton visible onClick={handleClickNewVideo} />
      </div>
    </ApolloClientWrapper>
  );
}

export default App;
