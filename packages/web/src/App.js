import './App.css';
import { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import { createSocketConnection } from './api/websocket';
import { getApolloClient, ApolloClientWrapper } from './api/apollo';
import { NewVideoButton } from './NewVideoButton';
import { VideosManager } from './VideosManager';

createSocketConnection();

function App() {
  const [videos, setVideos] = useState([1, 2, 3, 4]);
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

  return (
    <ApolloClientWrapper client={apolloClient}>
      <div className="App">
        <VideosManager
          loadMoreRef={loadMoreRef}
          videosListRef={videosListRef}
        />
        <NewVideoButton visible onClick={handleClickNewVideo} />
      </div>
    </ApolloClientWrapper>
  );
}

export default App;
