import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const {items} = useContext(CartContext);
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20 }}>YOUR CART IS EMPTY</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})