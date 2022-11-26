import { Text, View } from 'react-native'
import React, {createContext, useState} from 'react'
export const CartContext = createContext();

export const CartProvider = (props) => {
    const[items, setItems] = useState([]);

    const addItemToCart = (product, id) => {
        setItems(prevItems => {
            const item = prevItems.find(item => item.id == id);
            if (!item) {
              return [
                ...prevItems,
                {
                  id,
                  qty: 1,
                  product,
                  totalPrice: product.price,
                },
              ];
            } else {
              return prevItems.map(item => {
                if (item.id == id) {
                  item.qty++;
                  item.totalPrice += product.price;
                }
                return item;
              });
            }
          });
          console.log(items);
    }

  return (
    <CartContext.Provider 
    value={{items, addItemToCart}}>
        {props.children}
    </CartContext.Provider>
  )
}
