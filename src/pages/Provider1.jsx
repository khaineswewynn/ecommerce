import { useState } from "react";
import Context from "./Context";
import PropTypes from 'prop-types'
const Provider1=({children})=>{
    const [cartItems,setCartItems]=useState(()=>{
        const saveItems=localStorage.getItem('cartItems')
        return saveItems? JSON.parse(saveItems):[]       
    })

    const addToCart = (item) => {
       // console.log(item)
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

    return(
        <>
        <Context.Provider value={{cartItems,addToCart}}>
            {children}
        </Context.Provider>
        </>
    )
}
Provider.propTypes={
    children:PropTypes.node.isRequired
}
export default Provider1

