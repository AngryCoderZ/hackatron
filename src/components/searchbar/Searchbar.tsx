import React from 'react'
import { BsSearch } from 'react-icons/bs';

const Searchbar = () => {
  return (
    <div className="relative mt-1">
            <div className='h-auto'>
                <input type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-highlight focus:border-highlight block w-full pl-12 p-1 outline-none"
                    placeholder="What you looking for"
                />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 cursor-pointer text-centerleft-0 pl-3 pointer-events-auto z-20 ">
                <BsSearch className=" w-4 h-4 stroke-current text-gray-500 hover:text-primary "/>
            </div>

        </div>
  )
}

export default Searchbar