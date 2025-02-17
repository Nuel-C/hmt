'use client'
import Link from 'next/link';

const Nav = () => {

  const close = ()=> {
    var element = document.getElementById("main");
    element.classList.add("hidden");
  }

  return (
    <main>
        <div className='fixed z-10 h-full w-full' id='main'>
            <div className='flex flex-row w-full h-full'>
                <div className='flex bg-stone-950 flex-col space-y-12 w-1/2 p-12 text-white'>
                    <div className='text-right'>
                        <i className="fa-solid fa-xmark fa-sharp text-white text-xl" onClick={close}></i> 
                    </div>
                    <Link href='/' onClick={close}><i className="fa-solid fa-house"></i> Home</Link>
                    <Link href='/products' onClick={close}><i className="fa-solid fa-shirt"></i> Products</Link>
                    <Link href='/cart' onClick={close}><i className="fa-solid fa-cart-shopping"></i> My Cart</Link>
                    <Link href='/orders' onClick={close}><i className="fa-solid fa-bag-shopping"></i> My Orders</Link>
                </div>
                <div id='nv' className='md:w-full w-1/2 h-full' onClick={close}>           
                </div>
            </div>
        </div>
    </main>
  );
};

export default Nav;
