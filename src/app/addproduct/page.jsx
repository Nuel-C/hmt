'use client'
import { Pacifico } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link'


export const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
});

export default function Login() {

    const ref = useRef(null);
    const [classIndex, setClassIndex] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if(ref.current){
            // Remove previous background class
            ref.current.classList.remove('backgroundImage1', 'backgroundImage2', 'backgroundImage3');
      
            // Add the new background class based on classIndex
            if (classIndex === 1) {
              ref.current.classList.add('backgroundImage1');
            } else if (classIndex === 2) {
              ref.current.classList.add('backgroundImage2');
            } else if (classIndex === 3) {
              ref.current.classList.add('backgroundImage3');
            }
          }
          // Update the classIndex to cycle through the images
          setClassIndex((prevIndex) => (prevIndex === 3 ? 1 : prevIndex + 1));
        }, 3000);
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [classIndex]);

    
    return (
        <main className="p-5 h-screen w-full block backgroundImage1" id="nv2" ref={ref}>
            <div id='nv3' className="mx-2 lg:mx-96 md:mx-44 mt-5 overflow-y-auto custom-scrollbar" style={{ maxHeight: '70vh' }}>
                <div className="h-full flex flex-col justify-center items-center my-5">
                    <h1 className="mb-7 text-2xl font-bold">Add Product</h1>
                    <form className="flex flex-col space-y-5 text-sm w-full">
                        <label>
                            <p>Name</p>
                            <input required type="text" placeholder="Product Name" className="mt-2 rounded-full w-full border border-black p-2" name="name"/>
                        </label>
                        
                        <label>
                            <p>Price</p>
                            <input required type="number" placeholder="Price" className="mt-2 rounded-full w-full border border-black p-2" name="price"/>
                        </label>
                        <label>
                            <p>Product Description</p>
                            <textarea required rows='5' type="text" placeholder="Description" className="border border-black rounded mt-2 p-2 w-full" name="description"></textarea>
                        </label>
                        <label className="flex flex-col space-y-2">
                            <p>Product Image</p>
                            <input required type="file" className="border border-black rounded-full mt-2 p-2 w-full" name="file"/>
                        </label>

                        <div className="mt-5 flex flex-row items-center w-full">
                            <input type='checkbox'/><div className={`rounded-full h-4 w-4 bg-black border border-gray-300 mx-1 cursor-pointer mr-2`}></div>
                            <input type='checkbox'/><div className={`rounded-full h-4 w-4 bg-slate-100 border border-gray-300 mx-1 cursor-pointer mr-2`}></div>
                            <input type='checkbox'/><div className={`rounded-full h-4 w-4 bg-red-500 border border-gray-300 mx-1 cursor-pointer mr-2`}></div>
                            <input type='checkbox'/><div className={`rounded-full h-4 w-4 bg-yellow-500 border border-gray-300 mx-1 cursor-pointer mr-2`}></div>
                            <div className="flex-grow"></div>
                            <input type='checkbox'/><div className="mr-2">S</div>
                            <input type='checkbox'/><div className="mr-2">M</div>
                            <input type='checkbox'/><div className="mr-2">L</div>
                            <input type='checkbox'/><div className="mr-2">XL</div>
                        </div>
                        
                        <button className="rounded-full w-full p-2 bg-black text-white text-sm"><i className="fa-solid fa-right-to-bracket"></i> Submit</button>
                    </form>
                </div>
            </div>
            <div className="text-white bg-black flex flex-row justify-center p-2 lg:mx-96 md:mx-44 rounded-md mt-5">
                <span className="text-sm text-white">Go back to <Link href="/admindashboard" className="text-blue-500">Dashboard</Link></span>
            </div>
        </main>
    );
}
