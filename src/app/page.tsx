"use client";
import { Pacifico, Grey_Qo } from "next/font/google";
import Headder from "./headder";
import Item from "./item";
import Footer from "./footer";
import { useState, useRef, useEffect } from "react";
import ItemDetails from "./itemDetails";

// Google Fonts
const pacifico = Pacifico({
  subsets: ['cyrillic'],
  weight: '400'
});

const grey_qo = Grey_Qo({
  subsets: ['latin-ext'],
  weight: '400'
});

export default function Home() {
  // Typing ref to HTMLDivElement or null
  const ref = useRef<HTMLDivElement | null>(null);
  const [classIndex, setClassIndex] = useState(1);
  const [itemDetailsToggle, setItemDetailsToggle] = useState(false);

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

  const setDetailsToggle = () => {
    setItemDetailsToggle(!itemDetailsToggle);
  };

  return (
    <main>
      <ItemDetails toggle={itemDetailsToggle} setItemToggle={setDetailsToggle} />

      <div className='backgroundImage1 w-full h-screen p-5 flex flex-col justify-between' ref={ref}>
        <Headder />
        <div className="flex justify-center">
          <text className={`${pacifico.className} bg-black text-white p-2 rounded`}>
            Explore collection <i className="fa fa-angle-double-down" aria-hidden="true"></i>
          </text>
        </div>
      </div>

      <div className="m-5 grid gap-4 grid-cols-2 md:grid-cols-4">
        <Item text='black' setItemToggle={setDetailsToggle} />
        <Item text='black' setItemToggle={setDetailsToggle} />
        <Item text='black' setItemToggle={setDetailsToggle} />
        <Item text='black' setItemToggle={setDetailsToggle} />
        <Item text='black' setItemToggle={setDetailsToggle} />
        <Item text='black' setItemToggle={setDetailsToggle} />
        <Item text='black' setItemToggle={setDetailsToggle} />
      </div>

      <div className="backgroundImage4 w-full h-screen p-5 flex flex-col justify-between">
        <div></div>
        <div className="grid">
          <text className={`${grey_qo.className} bg-black text-white p-2 rounded justify-self-end`}>
            The new collection is <br />
            the synthesis of the harmonious <br />
            elements of Playful elegance <br /><br />
            EXPLORE OUR NEW COLLECTION <i className="fa fa-angle-double-down" aria-hidden="true"></i>
          </text>
        </div>
      </div>

      <Footer />
    </main>
  );
}
