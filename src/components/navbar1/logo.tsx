import React from 'react'
import Image from 'next/image'
import { BsFillBuildingsFill } from 'react-icons/bs'

const Logo = () => {
    return (
        <div className='flex space-x-2 items-center cursor-pointer hover:text-orange-600 Duration' >
            <div>
            <Image src="/Logo.webp" 
            alt="hackatron"
            height={150}
            width={150}
            />    
            </div>
        </div>
    )
}

export default Logo