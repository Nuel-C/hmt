"use client";
import { Pacifico, Grey_Qo } from "next/font/google";
import Headder from "../headder";
import Item from "./cartItem";
import { useState, useRef, useEffect } from "react";

const pacifico = Pacifico({
  subsets: ['cyrillic'],
  weight: '400'
});

const grey_qo = Grey_Qo({
  subsets: ['latin-ext'],
  weight: '400'
});

export default function Home() {
  const ref = useRef(null);
  const [classIndex, setClassIndex] = useState(1);
  const [items, setItems] = useState(Array(10).fill(<Item />));
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

  // Infinite Scroll handler
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setItems(prevItems => [...prevItems, ...Array(10).fill(<Item />)]);
    }
  };

  const setDetailsToggle = () => {
    setItemDetailsToggle(!itemDetailsToggle)
  }

  return (
    <main className="w-full h-screen flex flex-col justify-between overflow-hidden">
      <div className='backgroundImage1 w-full h-full p-5 flex flex-col justify-between' ref={ref}>
        <Headder />
        <div 
          className="m-5 flex flex-col overflow-y-auto custom-scrollbar p-5" 
          style={{ maxHeight: '70vh' }} 
          onScroll={handleScroll}
        >
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
          <Item text='white' setItemToggle={setDetailsToggle}/>
        </div>
        <div className="text-white bg-black flex flex-row justify-between p-2 lg:mx-96 md:mx-44 rounded-md">
            <text>Total: $5000</text>
            <button className="text-sm bg-white text-black p-1 rounded">Place Order <i class="fa-regular fa-credit-card"></i></button>
        </div>
      </div>
    </main>
  );
}
