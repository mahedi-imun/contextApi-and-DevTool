import React from 'react';
import './cart.css'
const Cart = ({ products, handleRemoveItem }) => {
    return (
        <div className='cart'>
            <h4>cat summery </h4>
            {
                products.map(product => <div>
                    <h3> {product.name}
                        <button onClick={() => handleRemoveItem(product)}> x</button>
                        
                    </h3>
                </div>)
            }
            {products.length !== 0||<h3>please add </h3> }
            {products.length === 1 && <h3>add more</h3>}
            {products.length >=5 ? <button> get offer</button>:'add 5 you have offer'}
        </div>
    );
};

export default Cart;