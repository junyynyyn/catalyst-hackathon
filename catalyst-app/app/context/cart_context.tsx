import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartContextProvider = (props: any) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId: any) => {
        setCartItems(cartItems.push(itemId));
    }

    const removeFromCart = (itemId: any) => {
        const index = cartItems.indexOf(itemId);
        if (index >= 0) {
            setCartItems(cartItems.splice(index, 1));
        }
    }

    const contextValue = { cartItems, addToCart, removeFromCart };

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}