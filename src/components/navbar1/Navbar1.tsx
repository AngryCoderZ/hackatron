//@ts-nocheck
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
//style
import { MdMenu, MdMenuOpen } from 'react-icons/md'

//component
import MenuItems from '../dependant/menu/_MenuItems';
import Searchbar from '../searchbar/Searchbar';
import Cart from '../cart/cart';
// theme
import Logo from './logo';

const Navbar1 = () => {
    const [toggleSearch, setToggleSearch] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const Humburger = !toggleMenu ? MdMenu : MdMenuOpen;

    const heroSection = () => (
        <div>
            <div className='flex justify-between items-center'>
                <Link href="/">
                    <Logo />
                </Link>
                <div className='hidden lg:flex space-x-8'>
                    <MenuItems />
                </div>
                    <div className='hidden lg:block lg:w-96 '>
                        <Searchbar />
                    </div>
                <div className='hidden lg:block'>
                    <Cart />
                </div>
                {/*mobile*/}
                <Humburger className='h-6 w-6 lg:hidden active:text-orange-600 transition duration-300'
                    onClick={() => setToggleMenu(!toggleMenu)}
                />
                {/*--mobile*/}
            </div>
            {/*mobile*/}
            {toggleMenu && (
                <div className='lg:hidden'>
                    <div className='flex justify-center space-y-4'>
                        <div className='w-full flex flex-col items-center space-y-6 p-3 bg-white rounded-lg '>
                            <Cart />
                            <MenuItems />
                            <div className=''>
                                <Searchbar />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/*--mobile*/}
        </div>
    )
    return (
        <div>
            {heroSection()}
        </div>
    )
}

export default Navbar1