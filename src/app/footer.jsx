import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    return (
        <div>
            <div className='mt-5'>
                <footer className='bg-gray-400 relative p-8 md:px-20'>
                    <div className='flex md:flex-row flex-col justufy-around lg:items-center items-start justify-between md:space-x-16'>
                    <div className='flex flex-col justufy-between items-start text-black mb-10 relative lg:left-0 md:left-10'>
                        <p className='font-bold mb-3'>Location</p>
                        <p className='mb-3'>Benin City, Edo State<br /> Nigeria</p>
                        <p>© 2022 HMT</p>
                    </div>
                    <div className='flex flex-col justufy-between items-start text-black mb-10'>
                        <p className='font-bold mb-3'>Quick Links</p>
                        <Link href='/' className='mb-3'>| Home</Link>
                        <Link href='/products' className='mb-3'>| All Products</Link>
                        <Link className={'block mb-3'} href='/login'>| Login</Link>
                    </div>
                    <div className='flex flex-col justufy-between items-start text-black mb-10'>
                        <p className='font-bold mb-3'>Let us chat!</p>
                        <p className='mb-3'>hmt@gmail.com</p>
                        <p className='mb-3'>+234 9052 741 664</p>
                        <div className='flex flex-row justufy-between items-center space-x-5'>
                            <a href='https://wa.me/message/66FMZ4LZOKQDF1' target='_blank'>
                                <Image
                                    src="/watsapp.jpg"
                                    width={10}
                                    height={10}
                                    alt="Picture of the author"
                                    className="w-8 h-8 rounded-full"
                                />
                            </a>
                            <a href='https://instagram.com/gems_n_jewelries?igshid=NTc4MTIwNjQ2YQ==' target='_blank'>
                                <Image
                                    src="/instagram.jpg"
                                    width={10}
                                    height={10}
                                    alt="Picture of the author"
                                    className="w-8 h-8 rounded-full"
                                />
                            </a>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
