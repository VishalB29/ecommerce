import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Icon} from '@rneui/themed';
import Cart from '../src/Cart';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingRight: 20, flexDirection: 'row'}}>
      <View style={{paddingRight:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" type="ionicon"  />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
