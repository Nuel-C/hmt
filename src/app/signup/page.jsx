'use client'
import { Pacifico } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link'


const pacifico = Pacifico({
    subsets: ['cyrillic'],
    weight: '400'
});

export default function SignUp() {

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
        <main className="p-5 fixed z-10 h-screen w-full block backgroundImage1" id="nv2" ref={ref}>
            <div id='nv3' className="mt-2 mx-2 lg:mx-96 md:mx-44 mt-44">
                <div className="h-full flex flex-col justify-center items-center my-5">
                    <h1 className="mb-7 text-2xl font-bold">Sign Up</h1>
                    <form className="flex flex-col space-y-2 text-sm w-full">
                        <label>
                            <input required type="email" placeholder="Email" className="rounded-full w-full border border-black p-2" name="email"/>
                        </label>
                        <label>
                            <input required type="text" placeholder="Phone Number" className="rounded-full w-full border border-black p-2" name="phone"/>
                        </label>
                        <label>
                            <input required type="password" placeholder="Password" className="rounded-full w-full border border-black p-2" name="password"/>
                        </label>
                        <label>
                            <input required type="password" placeholder="Confirm Password" className="rounded-full w-full border border-black p-2" name="confirm"/>
                        </label>
                        <button className="rounded-full w-full p-2 bg-black text-white text-sm"><i className="fa-solid fa-right-to-bracket"></i> Submit</button>
                    </form>
                    <span className="mt-4 text-sm">Already have an account? Login <Link href="/login" className="text-blue-500">Here</Link></span>
                </div>
            </div>
        </main>
    );
}
