import { useState,useEffect } from "react";
import Context from "./Context";
import { useContext } from "react";
const Cart=()=>{
  const { cartItems, updateCart,addToCart, removeFromCart, clearCart, getCartTotal } = useContext(Context)
  console.log(cartItems)

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);    
  };

    return(
       <>
       <div>
        <button className='border-gray-500 p-2' onClick={clearCart}>Clear Cart</button>
       </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.product.id}>
              <div className="flex gap-4">
                <img src={item.thumbnail} alt={item.product.title} className="rounded-md w-24 h-24" />
                <div className="flex gap-8 justify-center">
                  <h1 className="text-lg font-bold">{item.product.title}</h1>
                  <p className="text-gray-600">${item.product.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    updateCart(item)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    const cartItem = cartItems.find((product) => product.product.id === item.product.id);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
       </> 
    )
}

export default Cart