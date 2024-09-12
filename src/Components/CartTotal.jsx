import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const {currency , deliveryFee, getCartAmount} = useContext(ShopContext);


  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1={'cart'} text2={'totals'}/>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}{deliveryFee}.00</p>
        </div>
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0 ? Number(0): Number(getCartAmount() + deliveryFee)}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal