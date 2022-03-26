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
        
        const newCart = [...cart, product];
        setcart(newCart);
        
    }

    const [anyOne, setAnyOne] = useState([]);
    const choose = ()=>{
        const one = Math.floor(Math.random() * cart.length);
        setAnyOne(cart[one])
    }
    const removeAll =()=>{
        setcart([])
    }

    return (
        <div>
            <div className='show-one'>
                <img src={anyOne.img} alt="" />
                <h4>{anyOne.name}</h4>
            </div>
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
                <button className='btn-one' onClick={choose}>Choose One</button>
                <button className='btn-remove' onClick={removeAll}>Remove All</button>
            </div>
        </div>
        </div>
    );
};

export default Shop;