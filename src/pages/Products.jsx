import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const Products=()=>{
    const [products,setProducts]=useState([])
    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setProducts(data.products)
      }
    
      useEffect(() => {
        getProducts()
      }, [])
    
    return(
        <>
        <div class="grid grid-cols-4">
       
        {
            products.map(product =>(
                <div key={product.id} class='border border-gray-500 p-3'>
                    <p>{product.id}</p>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <Link class='bg-gray-600 p-2 text-gray-100 rounded' to={`/products/${product.id}`}>See More</Link>
                    
                </div>
            ))
        }
        </div>

        </>
    )
}

export default Products