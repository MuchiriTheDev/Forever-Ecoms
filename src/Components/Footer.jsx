import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
            <div className="">
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium id est.
                </p>
            </div>

            <div className="">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="">
                <p className='text-xl font-medium mb-5 uppercase'>Get In touch</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li><a href="tel:+254739393508">0739393508</a></li>
                    <li><a href="mailto:muchiri.mwangi.100@gamil.com">muchiri.mwangi.100@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center capitalize">Copyright &copy; 2024 -- All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer