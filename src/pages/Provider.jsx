import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import Context from './Context';

export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (item) => {
    console.log(item)
    const isItemInCart = cartItems.find((cartItem) => cartItem.product.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { product: item, quantity: 1 }]);
    }
  };
  const updateCart = (item) => {
    console.log(item)
    const isItemInCart = cartItems.find((cartItem) => cartItem.product.id === item.product.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { product: item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.product.id === item.product.id);
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.product.id !== item.product.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        updateCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};


