import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View, SafeAreaView} from 'react-native';
import ProductDetails from './ProductDetails';

import VideoPlayer from './VideoPlayer';
import {sanitizeVideoQueryData, useVideosQuery} from "./api/queries";

// const asd = require('./src/VideoPlayer/quick_slick_ce04033941.mp4');
// const videos = [asd, asd];
const {width, height} = Dimensions.get('window');
const VideosScrollView = () => {

    const {data} = useVideosQuery();
    const ref = useRef()
    const [playingVideo, setPlayingVideo] = useState(0);
    const [soundOn, setSoundOn] = useState(false);
    const handleVideoChange = event => {
        const nextVideo = Math.round(
            event.nativeEvent.contentOffset.y / (event.nativeEvent.contentSize.height / videos.length)
        );

        setPlayingVideo(nextVideo);
    };

    const videos = sanitizeVideoQueryData(data);

    return (
        <ScrollView ref={ref} onMomentumScrollEnd={handleVideoChange} pagingEnabled bounces={false}>
            {(videos || []).map((video, index) => (
                <>
                    <VideoPlayer
                        video={video}
                        isPlaying={index == playingVideo}
                        index={index}
                        toggleSoundOn={() => setSoundOn(!soundOn)}
                        soundOn={soundOn}
                    />
                    <ProductDetails/>
                </>
            ))}
        </ScrollView>
    );
};

export default VideosScrollView;
