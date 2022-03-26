import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <img src={props.item.img} alt="" />
            <p>{props.item.name}</p>
        </div>
    );
};

export default Cart;