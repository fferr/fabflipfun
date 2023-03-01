import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const quickslick = require('./quickslick_cc9111ffdb.jpg');

const ProductDetails = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Image source={quickslick} style={{ width: 100, height: 100 }} resizeMode="contain" />
      <Text style={styles.descriptionText}>Description Text Goes Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    height: 140,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ProductDetails;
