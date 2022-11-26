import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native'
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';

const ProductDetails = ({route, navigation}) => {
  const {addItemToCart} =useContext(CartContext);
    const { product } = route.params;
  return (
    <SafeAreaView style={styles.card}>
            <Image 
                style={styles.image}
                source={{uri: product.image}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.price}> Rs. {product.price}  ({product.category})</Text>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Button
            onPress={() => addItemToCart(product, product.id)}
            title="Add to cart"
            />
            </View>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
      card: {
        flex:1,
        marginTop:30,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginHorizontal:20,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 1,
        marginVertical: 10,
      },
      image: {
        height:'60%',
        width: '100%',
        alignSelf: 'center'
      },
      infoContainer: {
        padding: 16,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
      },
      description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
      },
})