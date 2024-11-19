import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
            <div className="">
                <img src={assets.logo} className='mb-5 w-32' alt="Irebern General Suppliers logo" />
                <p className='w-full md:w-3/4 text-gray-600'>
                    Irebern General Suppliers provides high-quality electronics and stationery supplies in Nairobi. We are a trusted supplier known for fast delivery and affordable prices.
                </p>
            </div>

            <div className="">
                <p className="text-xl font-medium mb-5">Company</p>
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
                    <li>KTDA Plaza, 6th Floor</li>
                    <li>P.O BOX 17439 - 00100 Nairobi, Kenya</li>
                    <li>
                        <a href="tel:+254713451714">0713451714 / 0748426199</a>
                    </li>
                    <li>
                        <a href="mailto:irebernsuppliers@gmail.com">irebernsuppliers@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-gray-600 text-center capitalize">
                Copyright &copy; 2024 Irebern General Suppliers -- Your go-to source for electronics and stationery in Nairobi. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
