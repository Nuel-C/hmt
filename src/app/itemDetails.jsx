import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
});

export default function ItemDetails({ toggle, setItemToggle }) {
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
        <main className={toggle ? "p-5 fixed z-10 h-full w-full block" : "p-5 fixed z-10 h-full w-full hidden"} id="nv2">
            <div className="flex flex-row justify-end">
                <i className="fa-solid fa-xmark fa-sharp text-white text-xl cursor-pointer" onClick={setItemToggle}></i>
            </div>
            <div id='nv3' className="mt-2 mx-2 lg:mx-96 md:mx-44">
                <div className="m-2">
                    <div className="flex flex-col justify-between items-start">
                        <Image
                            src="/item.webp"
                            width={500}
                            height={500}
                            style={{ width: '500px', height: '300px', borderRadius: '5px' }}
                            alt="Picture of the author"
                            priority
                        />
                        {/* Title and Price - Price on the far right */}
                        <div className="flex flex-row justify-between items-center w-full pt-5">
                            <span className="text-black text-xs">
                                HMF Green Tees
                            </span>
                            <span className={`${pacifico.className} bg-black text-white p-1 rounded text-xs`}>
                                $120.00
                            </span>
                        </div>
                        <div className="mt-5">
                            <p className="text-xs">
                                THE HF PANEL CAP IS A STRUCTURED CAMPER STYLE CAP WITH A FIRM FLAT BRIM, PERFECT FOR ADDING A TOUCH OF URBAN FLAIR LOOK. WITH ITS ADJUSTABLE DRAWSTRING AT THE BACK, YOU CAN CUSTOMIZE THE FIT FOR MAXIMUM COMFORT.
                            </p>
                        </div>
                        {/* Color selection with onClick handlers */}
                        <div className="mt-5 flex flex-row items-center w-full">
                            <div
                                className={`rounded-full h-4 w-4 bg-black border ${selectedColor === 'black' ? 'border-blue-500 border-4' : 'border-gray-300'} mx-1 cursor-pointer`}
                                onClick={() => handleColorSelect('black')}
                            ></div>
                            <div
                                className={`rounded-full h-4 w-4 bg-slate-100 border ${selectedColor === 'white' ? 'border-blue-500 border-4' : 'border-gray-300'} mx-1 cursor-pointer`}
                                onClick={() => handleColorSelect('white')}
                            ></div>
                            <div
                                className={`rounded-full h-4 w-4 bg-red-500 border ${selectedColor === 'red' ? 'border-blue-500 border-4' : 'border-gray-300'} mx-1 cursor-pointer`}
                                onClick={() => handleColorSelect('red')}
                            ></div>
                            <div
                                className={`rounded-full h-4 w-4 bg-yellow-500 border ${selectedColor === 'yellow' ? 'border-blue-500 border-4' : 'border-gray-300'} mx-1 cursor-pointer`}
                                onClick={() => handleColorSelect('yellow')}
                            ></div>
                            {/* Align to the right */}
                            <div className="flex-grow"></div>
                            {/* Size Dropdown to the far right */}
                            <select
                                value={selectedSize}
                                onChange={handleSizeSelect}
                                className="p-1 border border-gray-300 text-xs rounded focus:outline-none focus:border-blue-500"
                            >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        {/* Quantity and Add to Cart */}
                        <div className="mt-5 flex flex-row items-center justify-between w-full">
                            {/* Quantity controls on the far left */}
                            <div className="flex items-center space-x-1">
                                <button
                                    onClick={handleDecrease}
                                    className="p-1 bg-gray-200 text-xs rounded-l text-black hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="px-2 py-1 border-t border-b border-gray-200 text-xs text-black">{quantity}</span>
                                <button
                                    onClick={handleIncrease}
                                    className="p-1 bg-gray-200 text-xs rounded-r text-black hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                            {/* Add to Cart button on the far right */}
                            <button className="p-2 bg-black text-white text-xs rounded flex items-center hover:bg-gray-800">
                                <i className="fa-solid fa-cart-plus text-sm mr-1"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
