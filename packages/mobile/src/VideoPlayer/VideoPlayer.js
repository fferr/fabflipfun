import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const VideoPlayer = ({ video, isPlaying, soundOn, toggleSoundOn }) => {
    const [showIcon, setShowIcon] = useState(true);
    const videoRef = useRef(null);

    const restartVideo = () => {
        videoRef.current.seek(0);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowIcon(false);
        }, 750);
    }, [toggleSoundOn]);

    useEffect(() => {
        restartVideo();
    }, [isPlaying]);

    const handleVideoEnd = () => {
        restartVideo();
    };

    const handleSoundOn = () => {
        toggleSoundOn();
        setShowIcon(true);
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={handleSoundOn} style={styles.videoContainer}>
                <>
                    <Video
                        volume={soundOn ? 0 : 5}
                        ref={videoRef}
                        source={{ uri: `http://localhost:1337${video.media.url}` }}
                        style={styles.video}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={!isPlaying}
                        onEnd={handleVideoEnd}
                    />
                    {showIcon && (
                        <Icon
                            name={soundOn ? 'volume-off' : 'volume-up'}
                            size={30}
                            color="#fff"
                            style={styles.icon}
                        />
                    )}
                </>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height - 140,
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
});

export default VideoPlayer;