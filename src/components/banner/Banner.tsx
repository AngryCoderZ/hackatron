import React from 'react'
import Image from 'next/image'
import { BsCart } from 'react-icons/bs'

const Banner = () => {
    const brandImages = () => (
        <div className='flex space-x-2'>
            <Image src="/banner/Featured1.webp" alt=""
                width={100}
                height={100}
            />
            <Image src="/banner/Featured2.webp" alt=""
                width={100}
                height={100}
            />
            <Image src="/banner/Featured3.webp" alt=""
                width={100}
                height={100}
            />
            <Image src="/banner/Featured4.webp" alt=""
                width={100}
                height={100}
            />
        </div>
    )
    return (
        <div className='flex flex-col md:flex-row justify-between md:space-x-10 h-screen space-y-12'>
            <div className='flex flex-col space-y-6 md:max-w-xs'>
                <div>
                    <div className="inline font-bold bg-blue-300 text-blue-700 px-3 py-2 rounded-lg">
                        Sale 70%
                    </div>
                </div>
                <h1 className='text-5xl font-bold '>
                    An Industrial Take on Streetwear
                </h1>
                <p className='max-w-xs'>
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <div className='max-w-max'>
                    <div className='bg-gray-900 text-white p-2'>
                        <div className='flex justify-center item-center space-x-4'>
                            <BsCart />
                            <h2 className='text-bold'>Start Shopping</h2>
                        </div>
                    </div>
                </div>
                {brandImages()}
            </div>
            <div className=' md:w-1/2 hidden md:block'>
                <div className='bg-orange-200 rounded-full p-6'>
                    <Image src={"/banner/header.webp"}
                        alt="header"
                        width={500}
                        height={500}
                        className='scale-125
                        '
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner