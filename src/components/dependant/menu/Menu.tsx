//@ts-nocheck
import React, { FC } from 'react'
import Link from 'next/link'

const Menu: FC<any> = ({ title, link }) => {
    return (
        <div className='group border-child '>
            <Link href={link || "#"} className='hover:text-orange-600 transition duration-300'>
                {title}
            </Link>
            <div className='group-hover:border-b group-hover:border-orange-600 mx-2 transition duration-500'></div>
        </div>
    )
}

export default Menu