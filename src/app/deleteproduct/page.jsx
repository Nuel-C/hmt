"use client";
import { Pacifico, Grey_Qo } from "next/font/google";
import Link from 'next/link'
import Item from "./item";
import { useState, useRef, useEffect } from "react";

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
        <div 
          className="m-5 grid gap-4 grid-cols-2 md:grid-cols-4 overflow-y-auto custom-scrollbar" 
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
        <div className="text-white bg-black flex flex-row justify-center p-2 lg:mx-96 md:mx-44 rounded-md">
            <span className="text-sm text-white">Go back to <Link href="/admindashboard" className="text-blue-500">Dashboard</Link></span>
        </div>
      </div>
    </main>
  );
}
