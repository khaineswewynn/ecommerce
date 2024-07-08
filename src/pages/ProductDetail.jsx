import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Context from "./Context";

const ProductDetail = () => {
    const { cartItems, addToCart } = useContext(Context);
    let { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState();

    async function getProduct() {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
    }

    useEffect(() => {
        getProduct();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section key={id} className="details-section">
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={product.thumbnail} alt="" className='w-full' />
                    </div>
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                        <button
                            className='bg-green-600 p-2 text-gray-100'
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;
