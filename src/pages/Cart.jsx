import { useState,useEffect } from "react";

const Cart=()=>{
    const [cartItems,setCartItems]=useState([])
    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
          setCartItems(JSON.parse(data));
          console.log(data)
        }

      }, []);

      const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.quantity === 1) {
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
          );
        }
      };

    return(
       <>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.product.id}>
              <div className="flex gap-4">
                <img src={item.product.thumbnail} alt={item.title} className="rounded-md w-24 h-24" />
                <div className="flex gap-8 justify-center">
                  <h1 className="text-lg font-bold">{item.product.title}</h1>
                  <p className="text-gray-600">${item.product.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  
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