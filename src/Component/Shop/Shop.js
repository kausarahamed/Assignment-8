import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                {
                    cart.map((item )=>
                        <Cart item={item}></Cart>
                    )
                }
                <button>Choose One</button>
                <button>Remove All</button>
            </div>
        </div>
    );
};

export default Shop;