import React, { useContext } from 'react';
import { Hello } from '../Home/Home';
import './cart.css'

const Cart = ({ products, handleRemoveItem }) => {
    const context = useContext(Hello)
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
            {products.length !== 0||<h3>{context}</h3> }
            {products.length === 1 && <h3>add more</h3>}
            {products.length >=5 ? <button> get offer</button>:'add 5 you have offer'}
        </div>
    );
};

export default Cart;