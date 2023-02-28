import './App.css';
import { useState, useRef, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import VideoContainer from './VideoContainer/VideoContainer';
import { createSocketConnection } from './api/websocket';
import { NewVideoButton } from './NewVideoButton';

createSocketConnection();

function App() {
  const [videos, setVideos] = useState([1, 2, 3, 4]);
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
    videosListRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (loadMoreVideos) {
      // fetch more videos here
      setVideos((prevState) => [...prevState, 1, 2, 3, 4]);
    }
  }, [loadMoreVideos]);

  return (
    <div className="App">
      <div ref={videosListRef} className="videos-list">
        {videos.map((v, index) => (
          <VideoContainer index={index} loadMoreRef={loadMoreRef} />
        ))}
      </div>
      <NewVideoButton visible onClick={handleClickNewVideo} />
    </div>
  );
}

export default App;
