import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Cart = () => {
  return (
    <div className='bg-zinc-200 p-3 rounded-full relative'>
        <AiOutlineShoppingCart size={30}/>
        <div className='inline-block bg-red-500 rounded-full text-white absolute top-0'>
            0
        </div>
    </div>
  )
}

export default Cart