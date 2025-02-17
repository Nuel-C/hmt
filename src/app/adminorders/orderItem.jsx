import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
});

export default function Item() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('black'); // State to keep track of the selected color
    const [selectedSize, setSelectedSize] = useState('M'); // State to keep track of the selected size

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleSizeSelect = (event) => {
        setSelectedSize(event.target.value);
    };

    return (
        <main className="block mt-2">
            <div className="mt-2 mx-2 lg:mx-96 md:mx-44 bg-black p-2 rounded-md">
                <div className="m-2">
                    <div className="flex flex-col justify-between items-start">
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                HMF Green Tees
                            </span>
                            <span className='bg-white text-black p-1 rounded text-xs'>
                                X 4
                            </span>
                        </div>       
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                HMF Green Tees
                            </span>
                            <span className='bg-white text-black p-1 rounded text-xs'>
                                X 4
                            </span>
                        </div>       
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                HMF Green Tees
                            </span>
                            <span className='bg-white text-black p-1 rounded text-xs'>
                                X 4
                            </span>
                        </div>  
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                TOTAL :
                            </span>
                            <span className='text-white p-1 rounded text-xs'>
                                $5000
                            </span>
                        </div>    
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                STATUS :
                            </span>
                            <span className='text-white p-1 rounded text-xs'>
                                Delivered <i className="fa-solid fa-square-check text-green-500"></i>
                            </span>
                        </div>    
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                DELIVERY ADDRESS :
                            </span>
                            <span className='text-white p-1 rounded text-xs'>
                                John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA.
                            </span>
                        </div>    
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-white text-xs">
                                PHONE :
                            </span>
                            <span className='text-white p-1 rounded text-xs'>
                                08063544172
                            </span>
                        </div>   
                    </div>
                    <div className="flex items-center align-center justify-center">
                        <button className="bg-white p-2 text-sm rounded mt-5 w-full">Delivered</button>                     
                    </div> 
                </div>
            </div>
        </main>
    );
}
