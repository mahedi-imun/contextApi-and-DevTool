import React, { createContext } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import useCart from '../useHooks/useCart';
import useProducts from '../useHooks/useProducts';
import './Home.css'
export const Hello = createContext('hi')
const Home = () => {
    const [products, setProduct] = useProducts()
    const [cart, setCart] = useCart()
    const handleAddToCart = (clickedProduct) => {
        const exist = cart.find(pd => pd._id === clickedProduct._id);
        if (!exist) {
            const newCart = [...cart, clickedProduct]
            setCart(newCart)
        }
        else {
            alert('dont add same products')
        }
    };
    const handleRemoveItem = (removeItem) => {
        const rest = cart.filter(pd => pd._id !== removeItem._id)
        setCart(rest)
    }
    return (
        <div className='product-and-cart-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            {
                <Hello.Provider value='how are you'>
                    <div>
                <Cart
                    products={cart}
                    key={cart}
                    handleRemoveItem={handleRemoveItem}
                >
                </Cart>
            </div>
                </Hello.Provider>
            }
        </div>
    );
};

export default Home;