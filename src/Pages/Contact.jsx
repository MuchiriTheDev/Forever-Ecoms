import React from 'react'
import Title from '../Components/Title'
import NewsLetter from '../Components/NewsLetter'
import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'contact'} text2={'us'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center  gap-10 mb-28 ">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>KTDA plaza, 6th floor</p>
          <p className='text-gray-500'> Tel : <a href="tel:+254713451714">0713451714 | 0748426199</a> 
            <br /> Email : <a href="mailto:irebernsuppliers@gmail.com">irebernsuppliers@gmail.com</a></p>
          <p className='font-semibold text-xl text-gray-600'>
            Careers at Irebern General Suppliers
          </p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-celticBlue px-8 py-4 text-sm text-celticBlue  hover:bg-celticBlue hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact