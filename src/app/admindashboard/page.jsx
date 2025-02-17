"use client";
import { Pacifico, Grey_Qo } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import Link from 'next/link'


export const pacifico = Pacifico({
  subsets: ['cyrillic'],
  weight: '400'
});

export const grey_qo = Grey_Qo({
  subsets: ['latin-ext'],
  weight: '400'
});

export default function Home() {
  const ref = useRef(null);
  const [classIndex, setClassIndex] = useState(1);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ref.current) {
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
    <main className="p-5 fixed z-10 h-full w-full block backgroundImage1" id="nv2" ref={ref}>
        <div id='nv3' className="mt-2 mx-2 lg:mx-96 md:mx-44 mt-44">
            <div className="flex justify-center">
                <text className="font-semibold">Dashboard</text>
            </div>
            <div className="h-full grid grid-cols-3 gap-4 my-5">
                <div className="bg-black text-white flex justify-center p-5 w-full h-22 items-center align-center rounded">
                  <Link href="/addproduct" className="text-blue-500"><i className="fa-solid fa-circle-plus text-2xl"></i></Link>
                </div>
                <div className="bg-black text-white flex justify-center p-5 w-full h-22 items-center align-center rounded">
                  <Link href="/deleteproduct" className="text-blue-500"><i className="fa-solid fa-trash text-2xl"></i></Link>
                </div>
                <div className="bg-black text-white flex justify-center p-5 w-full h-22 items-center align-center rounded">
                  <Link href="/adminorders" className="text-blue-500"><i className="fa-regular fa-clipboard text-2xl"></i></Link>
                </div>
            </div>
        </div>
    </main>
  );
}
