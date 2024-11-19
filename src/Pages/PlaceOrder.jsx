import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod")
  const { navigate } = useContext(ShopContext);
  return (
    <form onSubmit={() => navigate('/orders')} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">

        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'Delivery'} text2={'information'}/>
        </div>
        <div className="flex gap-3">
          <input required type="text" placeholder='First Name' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
          <input required type="text" placeholder='Last Name' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
        </div>
        <input required type="email" placeholder='Email Address' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
        <input required type="text" placeholder='Nearest Town' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
        <div className="flex gap-3">
          <input required type="text" placeholder='County' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
          <input required type="text" placeholder='Constituency' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
        </div>
        <div className="flex gap-3">
          <input required type="number" placeholder='Postal Code' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
          <select name="Country" className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' required >
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
          </select>
        </div>
        <input required type="tel" placeholder='Phone Number' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
        <input required type="number" placeholder='ID Number' className='border  bprder-gray-300 rounded py-1.5 px-3.5 w-full ' />
      </div>
      
      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'payment'} text2={'method'}/>
          {/* payment methods */}
          <div className="flex gap-3 flex-col lg:flex-row">
            
            <div onClick={() => setMethod("mpesa")} className="flex justify-start items-center gap-2 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "mpesa" ? "bg-green-600" : null}`}></p>
              <p>Mpesa</p>
            </div>
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-600" : null}`}></p>
              <p className='text-gray-500 font-medium mx-4 uppercase text-sm '>Cash On Delivery</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type='submit'  className='bg-celticBlue text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder