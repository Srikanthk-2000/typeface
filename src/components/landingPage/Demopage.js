import React, { useState }from 'react';
import shose from '../../assets/images/shoes.webp';
import { useNavigate } from 'react-router-dom';

const Demopage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const navigate = useNavigate();
    const price = 1500;

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const  decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1); 
        }
    };

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    const handleAddToCart = () => {
        navigate('/addtocart', {
            state: {
                size: selectedSize,
                color: selectedColor,
                quantity: quantity,
                image: shose,
                price: price,   
            }
        });
    };
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <img src={shose} alt='shose1' />
                </div>
                <div className='pt-10'>
                    <h1 className='text-lg font-bold pl-10'>Running Shoes for Men | Memory Foam Sports Shoes <br />| Bacca Bucci</h1>
                    <p className='pl-10 pt-10'>price:${price}</p>

                    <div className='pl-10'>
                        <p className='pt-5 pb-5'>Size</p>
                        <button className={`border border-black-800 p-1 bg-gray-400  text-white px-5 ml-1 ${selectedSize === 'S' && 'bg-red-500'}`} onClick={() => handleSizeSelection('S')}>S</button>
                        <button className={`border border-black-800 p-1 bg-gray-400  text-white px-5 ml-1 ${selectedSize === 'M' && 'bg-red-500'}`} onClick={() => handleSizeSelection('M')}>M</button>
                        <button className={`border border-black-800 p-1 bg-gray-400  text-white px-5 ml-1 ${selectedSize === 'L' && 'bg-red-500'}`} onClick={() => handleSizeSelection('L')}>L</button>
                        <button className={`border border-black-800 p-1 bg-gray-400  text-white px-5 ml-1 ${selectedSize === 'XL' && 'bg-red-500'}`} onClick={() => handleSizeSelection('XL')}>XL</button>
                        <button className={`border border-black-800 p-1 bg-gray-400  text-white px-5 ml-1 ${selectedSize === '2XL' && 'bg-red-500'}`} onClick={() => handleSizeSelection('2XL')}>2XL</button>
                        <button className={`border border-black-800 p-1 bg-gray-400  text-white px-5 ml-1 ${selectedSize === '3XL' && 'bg-red-500'}`} onClick={() => handleSizeSelection('3XL')}>3XL</button>
                    </div>
                    <div className='pl-10'>
                        <p className=' pt-5 pb-5'>Color</p>
                        <button className={`border border-black rounded-full bg-gray-400 ml-2 ${selectedColor === 'gray' && 'bg-red-500'}`} onClick={() => handleColorSelection('gray')}style={{ width: "20px", height: "20px" }}></button>
                        <button className={`border border-black rounded-full bg-red-500 ml-2 ${selectedColor === 'red' && 'bg-red-500'}`} onClick={() => handleColorSelection('red')}style={{ width: "20px", height: "20px" }}></button>
                        <button className={`border border-black rounded-full bg-green-500 ml-2 ${selectedColor === 'green' && 'bg-red-500'}`} onClick={() => handleColorSelection('green')}style={{ width: "20px", height: "20px" }}></button>
                        <button className={`border border-black rounded-full bg-blue-700 ml-2 ${selectedColor === 'blue' && 'bg-red-500'}`} onClick={() => handleColorSelection('blue')}style={{ width: "20px", height: "20px" }}></button>
                        <button className={`border border-black rounded-full bg-amber-500 ml-2 ${selectedColor === 'amber' && 'bg-red-500'}`} onClick={() => handleColorSelection('amber')}style={{ width: "20px", height: "20px" }}></button>
                        <p>5 items in Stock</p>
                    </div>
                    <div className=' pl-10 pt-5' style={{width: "150px", height: "100px"}}>
                        <h1>Quantity</h1>
                        <div className='border border-black '>
                            <button className="pl-2" onClick={decreaseQuantity}>-</button>
                            <span className='pl-8'>{quantity}</span>
                            <button className="pl-8" onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                    <div className='pl-10'>
                        <button className='rounded-none border border-black-600 p-3 bg-black hover:bg-red-500 text-white' style={{width: "500px", height: "40px"}}>Buy It Now</button>
                    </div>

                    <div className='pl-10 pt-1'>
                        <button className='border border-black-800 p-3 bg-gray-200 hover:bg-red-500 text-black' style={{width: "500px", height: "40px"}} onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demopage;
