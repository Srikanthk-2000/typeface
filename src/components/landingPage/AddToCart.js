import React from 'react';
import { useLocation } from 'react-router-dom';

const AddToCart = () => {
    // Access the location object to get the state passed from the previous page
    const location = useLocation();
    const { size, color, quantity, image, price } = location.state;

    return (
        <div className='border border-black flex justify-center mx-8'>
            <div className=''>
            <h1 className='pb-5'>Added to Cart</h1>
            <img src={image} alt='product'style={{ width: "200px", height: "200px" }}/>
            </div>
            <div className=' pt-16 pr-20 pl-5'>
            <p>Size: {size}</p>
            <p>Color: {color}</p> 
            <p>Quantity: {quantity}</p>
            <p>price:{price}</p>
            </div>
        </div>
    )
};

export default AddToCart;
