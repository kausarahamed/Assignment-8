import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect( () =>{
        fetch('fakedb.json')
  .then(response => response.json())
  .then(data => setproducts(data))
    },[]);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product =><Product key={product.id}
                product={product}></Product> )}
            </div>
            <div className="cart-container">
                cart    
            </div>
        </div>
    );
};

export default Shop;