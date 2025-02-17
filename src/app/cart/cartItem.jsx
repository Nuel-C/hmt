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
                            <span className="text-white text-xs">
                                HMF Green Tees
                            </span>
                            <span className={`${pacifico.className} bg-white text-black p-1 rounded text-xs`}>
                                $120.00
                            </span>
                        </div>
                        
                        {/* Color selection with onClick handlers */}
                        <div className="mt-5 flex flex-row items-center w-full">
                            <div
                                className={`rounded-full h-4 w-4 bg-black border ${selectedColor === 'black' ? 'border-blue-500 border-4' : 'border-gray-300'} mx-1 cursor-pointer`}
                                onClick={() => handleColorSelect('black')}
                            ></div>
                            <div className="flex-grow text-white">4 M</div>
                            <div className="text-white mx-2"><i className="fa-solid fa-trash text-red-500"></i></div>
                        </div>                        
                    </div>
                </div>
            </div>
        </main>
    );
}
