import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { navigate, products, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData , setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for(const itms in cartItems){
      for(const itm in cartItems[itms]){
        if (cartItems[itms][itm] > 0){
          tempData.push({
            _id : itms,
            size: itm,
            quantity : cartItems[itms][itm]
          })
        }
      }
    }
    setCartData(tempData);
    
  },[cartItems])
  return (
    <div className="border-t pt-14 ">

      <div className="text-2xl mb-3">
        <Title text1={'Your'} text2={'cart'}/>
      </div>

      <div className="">
        {
          cartData.map((it, i)=>{
            const productData = products.find((pro) => pro._id === it._id)

            return(
              <div key={i} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 ">
                <div className="flex items-start gap-6">
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div className="">
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 '>{it.size}</p>
                    </div>
                  </div>
                </div>
                <input 
                  onChange={(e) => e.target.value ==='' || e.target.value === "0" ? null : updateQuantity(it._id, it.size, Number(e.target.value))} 
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={it.quantity} />
                <img onClick={() => updateQuantity(it._id, it.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={() => navigate("/place-order")} className='bg-black text-white text-sm uppercase my-8 px-8 py-3'>
              Make The Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart