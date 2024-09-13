import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';

const Orders = () => {
  const [useInfo , setUseInfo ] = useState([])
  const { products , currency , cartItems } = useContext(ShopContext);

  useEffect( () => {
    let ordered = []
    for(const itms in cartItems){
      for(const itm in cartItems[itms]){
        if (cartItems[itms][itm] > 0){
          ordered.push({
            _id : itms,
            size: itm,
            quantity : cartItems[itms][itm]
          })
        }
      }
    }
    setUseInfo(ordered);
  }, [])
  

  return (
    <div className='border-t pt-16'>

      <div className="text-2xl">
        <Title text1={"my"} text2={'orders'}/>
      </div>

      <div>
        {
          useInfo.map((it, i)=>{
            const orders = products.find(pro => pro._id === it._id)
            return(
              <div key={i} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div className="flex items-start gap-6 text-sm">
                  <img src={orders.image[0]} className='w-16 sm:w-20' alt="" />

                  <div>
                    <p className='sm:text-base font-medium'>{it.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                      <p className='text-lg'>{currency}{orders.price}</p>
                      <p> Quantity : {it.quantity}</p>
                      <p> Size : {it.size}</p>
                    </div>
                    <p className='mt-2'>Date : <span className='text-gray-400'>25, September,2024</span></p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className='min-w-2 rounded-full bg-green-500 w-4 h-4'></p>
                    <p className='text-sm capitalize md:text-base'>Ready to ship</p>
                  </div>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders