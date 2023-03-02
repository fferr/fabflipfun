import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Dimensions, View, SafeAreaView} from 'react-native';
import VideosScrollView from "./src/VideosScrollView";
import {ApolloClientWrapper, getApolloClient} from "./src/api/apollo";

// const asd = require('./src/VideoPlayer/quick_slick_ce04033941.mp4');
// const videos = [asd, asd];
const {width, height} = Dimensions.get('window');
const App = () => {

    const apolloClient = getApolloClient();
    return (
        <ApolloClientWrapper client={apolloClient}>
            <VideosScrollView/>
        </ApolloClientWrapper>
    );
};

export default App;
