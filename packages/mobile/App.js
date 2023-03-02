import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View, SafeAreaView, LogBox} from 'react-native';
import VideosScrollView from "./src/VideosScrollView";
import {ApolloClientWrapper, getApolloClient} from "./src/api/apollo";
import {createSocketConnection} from "./src/api/websocket";

// const asd = require('./src/VideoPlayer/quick_slick_ce04033941.mp4');
// const videos = [asd, asd];
const {width, height} = Dimensions.get('window');
const App = () => {

    LogBox.ignoreAllLogs()

    const apolloClient = getApolloClient();
    createSocketConnection('http://localhost:1337', ()=> apolloClient)
    return (
        <ApolloClientWrapper client={apolloClient}>
            <VideosScrollView/>
        </ApolloClientWrapper>
    );
};

export default App;
