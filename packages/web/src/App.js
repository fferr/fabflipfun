import './App.css';
import { useState } from 'react';
import VideoContainer from './VideoContainer/VideoContainer';


function App() {
  const [videos, setVideos] = useState([1, 2, 3]);
  return (
    <div className="App">
      {
        videos.map(v => <VideoContainer />)
      }
    </div>
  );
}

export default App;
