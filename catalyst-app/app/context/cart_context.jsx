'use client';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// export const CartContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (itemId) => {
//         cartItems.push(itemId);
//     }

//     const removeFromCart = (itemId) => {
//         const index = cartItems.indexOf(itemId);
//         if (index >= 0) {
//             setCartItems(cartItems.splice(index, 1));
//         }
//     }

//     const resetCart = () => {
//         setCartItems([]);
//     }

//     const contextValue = { cartItems, addToCart, removeFromCart, resetCart };

//     return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
// }