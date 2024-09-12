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
          <p className='text-gray-500'>Nairobi, Nyeri, Nakuru</p>
          <p className='text-gray-500'> Tel : <a href="tel:+254739393508">0739393508</a> 
            <br /> Email : <a href="mailto:muchiri.mwangi.100@gmail.com">muchiri.mwangi.100@gmail.com</a></p>
          <p className='font-semibold text-xl text-gray-600'>
            Careers at Forever
          </p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact