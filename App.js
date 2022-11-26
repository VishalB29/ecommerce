import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Login';
import ProductListing from './src/ProductListing';
import ProductDetails from './src/ProductDetails';
import Cart from './src/Cart';
import { CartProvider } from './context/CartContext';
import Header from './header/Header';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsL"
          component={ProductListing}
          options={{headerTitle : 'Products', headerStyle:{
            backgroundColor:'#009387'
          },
          headerRight: () => <Header/>
        }}
        />
        <Stack.Screen
          name="ProductsD"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerTitle : 'CART', headerStyle:{
            backgroundColor:'#009387'
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
