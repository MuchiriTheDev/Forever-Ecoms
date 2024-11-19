import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row border border-gray-400'>
    {/* hero left side  */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
                </div>
                <h1 className=' text-3xl sm:py-3 lg:text-5xl leading-relaxed mb-3'>Latest Products</h1>
                <div className="flex items-center gap-2">
                    <Link to={`/collection`} className='bg-celticBlue py-3 px-6 flex justify-center items-center gap-2 rounded-md shadow-md font-semibold text-seasalt'>
                        Shop Now <IoIosArrowForward />
                    </Link>
                </div>
            </div>
        </div>
    {/* Hero right side */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero