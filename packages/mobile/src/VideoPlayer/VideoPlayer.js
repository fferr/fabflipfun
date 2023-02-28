import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const VideoPlayer = ({ videoUri, isPlaying, index, soundOn, toggleSoundOn }) => {
  console.log(isPlaying, index);
  const videoRef = useRef(null);

  const restartVideo = () => {
    videoRef.current.seek(0);
  };

  useEffect(() => {
    restartVideo();
  }, [isPlaying]);

  const handleVideoEnd = () => {
    restartVideo();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} onPress={toggleSoundOn} style={styles.videoContainer}>
        <Video
          volume={soundOn ? 0 : 5}
          ref={videoRef}
          source={videoUri}
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={!isPlaying}
          onEnd={handleVideoEnd}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: 'black',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    ...StyleSheet.absoluteFill,
  },
  playButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontSize: 32,
  },
});

export default VideoPlayer;
