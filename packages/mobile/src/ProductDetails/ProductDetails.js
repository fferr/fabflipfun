import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductDetails = ({product}) => {
  const {brand, name, description, image: {data:{attributes: {url}}}}=product
  console.log(product, brand, name, url, `http:localhost:1337${url}`)
  const uri = `http:localhost:1337${url}`

  return (
    <View style={styles.descriptionContainer}>
      <Image source={{uri}} style={styles.imageContainer} resizeMode="stretch" />
      <View style={{flexDirection: 'column'}}>

      <Text style={styles.brandText}>{brand}</Text>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <Icon name="shopping-cart" size={30} color={'#FA6A66'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: { width: 80, height: 80, borderRadius: 100 },
  descriptionContainer: {
    flex: 1,
    height: 140,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brandText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },nameText: {
    color: 'black',
    fontSize: 16,
  },descriptionText: {
    color: 'black',
    fontSize: 14,
  },
});

export default ProductDetails;
