import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({handleAddToClick , product}) => {
    
    const {name, img, price} = product;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            </div>
            <button onClick={ () => handleAddToClick(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Product;