import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import ProductDetails from './src/ProductDetails';

import VideoPlayer from './src/VideoPlayer';

const asd = require('./src/VideoPlayer/quick_slick_ce04033941.mp4');
const videos = [asd, asd];
const { width, height } = Dimensions.get('window');
const App = () => {
  const ref = useRef();
  const [playingVideo, setPlayingVideo] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const handleVideoChange = event => {
    const nextVideo = Math.round(
      event.nativeEvent.contentOffset.y / (event.nativeEvent.contentSize.height / videos.length)
    );

    console.log(nextVideo);
    ref.current.scrollTo({ y: height * playingVideo });
    setPlayingVideo(nextVideo);
  };

  // useEffect(() => {
  //   const scrollTo = height * playingVideo;
  //   console.log(scrollTo);
  //   ref.current.scrollTo(scrollTo);
  // }, [playingVideo]);

  return (
    <ScrollView ref={ref} onScrollEndDrag={handleVideoChange} bounces={false}>
      {videos.map((video, index) => (
        <>
          <VideoPlayer
            videoUri={video}
            isPlaying={index == playingVideo}
            index={index}
            toggleSoundOn={() => setSoundOn(!soundOn)}
            soundOn={soundOn}
          />
          <ProductDetails />
        </>
      ))}
    </ScrollView>
  );
};

export default App;
