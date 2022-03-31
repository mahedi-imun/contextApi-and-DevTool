import React from 'react';
import './Product.css'
const Product = ({ product, handleAddToCart }) => {
    const { name, price, picture } = product
    return (
        <div className='card-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h4>price: ${price}</h4>
            <button onClick={() => handleAddToCart(product)}>add to cart</button>
        </div>
    );
};

export default Product;