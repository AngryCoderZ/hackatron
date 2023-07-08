import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Cart = () => {
  return (
    <div className="bg-zinc-200 p-3 rounded-full relative hover:scale-110">
    <div className=" px-1 absolute top-0 right-0 mx-2 bg-red-500 rounded-full text-white">
      0
    </div>
    <AiOutlineShoppingCart size={30} />
  </div>
  )
}

export default Cart