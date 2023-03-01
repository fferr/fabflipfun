import './App.css';
import { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import VideoContainer from './VideoContainer/VideoContainer';
import { createWebsocketConnection } from './api/websocket';
import { getApolloClient } from './api/apollo';
import { NewVideoButton } from './NewVideoButton';
import { useVideosQuery } from './api/queries';
import { ApolloClientWrapper } from './api/apollo-config';

createWebsocketConnection();

function TestComp() {
  const result = useVideosQuery();
  console.log('{data, error, loading}::', result);

  return <div>test</div>;
}

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
        <div ref={videosListRef} className="videos-list">
          <TestComp />
          {videos.map((v, index) => (
            <VideoContainer
              index={index}
              loadMoreRef={loadMoreRef}
              key={index}
            />
          ))}
        </div>
        <NewVideoButton visible onClick={handleClickNewVideo} />
      </div>
    </ApolloClientWrapper>
  );
}

export default App;
