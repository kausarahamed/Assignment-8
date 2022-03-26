import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setcart] = useState([]);
    const [products, setproducts] = useState([]);
    useEffect( () =>{
        fetch('fakedb.json')
  .then(response => response.json())
  .then(data => setproducts(data))
    },[]);

    const handleAddToClick = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setcart(newCart);
        
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product =><Product key = {product.id}
                product = {product}
                handleAddToClick ={handleAddToClick}
                ></Product> )}
            </div>
            <div className="cart-container">
                <h2>Cart Items</h2>
                <div>
                    <p>Selected Items: {cart.length}</p>
                    </div>  
            </div>
        </div>
    );
};

export default Shop;