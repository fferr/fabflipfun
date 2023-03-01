import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View, SafeAreaView} from 'react-native';
import {ApolloClientWrapper, createApolloClient} from "commons";
import VideosScrollView from "./src/VideosScrollView";

// const asd = require('./src/VideoPlayer/quick_slick_ce04033941.mp4');
// const videos = [asd, asd];
const {width, height} = Dimensions.get('window');
const App = () => {

    return (
        <ApolloClientWrapper client={createApolloClient('http://localhost:1337/graphql')}>
            <VideosScrollView/>
        </ApolloClientWrapper>
    );
};

export default App;
