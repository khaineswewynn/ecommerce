import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";

const ProductDetail=()=>{
    let { id } = useParams(); 
    const [isLoading, setLoading] = useState(true); 
    
    const [product,setProduct]=useState()
    const [products,setProducts]=useState([])
    const [cartItems,setCartItems]=useState([])
    async function getProduct() {
        const response = await fetch('https://dummyjson.com/products/'+id)
        const data = await response.json()
        //console.log(data)
        setProduct(data)
        setLoading(false);
        //setProducts(data.products)
        //setProduct(data.products.find(product => String(product.id) === id));
      }
  
    
      useEffect(() => {
        getProduct()
      }, [])

      useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
          setCartItems(JSON.parse(data));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, [cartItems]);

      function addToCart()
      {
        console.log(product)
        console.log(cartItems)
        let existingItem=cartItems.find(item=> item.product.id===product.id)
        if (existingItem) {
			const latestCartUpdate = cartItems.map(item =>
				item.product.id === product.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartItems(latestCartUpdate);
		} else {
			setCartItems([...cartItems, {product: product, quantity: 1}]);
		}
      }
      
      if (isLoading) {
        return <div >Loading...</div>;
      }
    
    
    return (  
        <>  

        <section key={id} className="details-section">  
             
             <div className='grid grid-cols-2'>
             <div>
                <img src={product.thumbnail} alt="" className='w-100' />
            </div>
            <div>  
                    <h3>{product.title}</h3>  
                    <p>{product.description}</p> 
                    <p>{product.category}</p> 
                    <p>{product.price}</p> 
                    <button className='bg-green-600 p-2 text-gray-100' onClick={addToCart}>Add to Cart</button>
            </div>  
             </div>
            
        </section>  
       </>  
    )
}

export default ProductDetail