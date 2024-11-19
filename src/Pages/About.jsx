import React from 'react'
import Title from '../Components/Title'
import NewsLetter from '../Components/NewsLetter'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'about'} text2={'us'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Irenbern General Suppliers" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Irenbern General Suppliers is a leading supplier of electronics and stationery across Kenya. Our company is dedicated to providing high-quality products that meet the diverse needs of businesses, educational institutions, and individual customers. We offer a wide range of electronic devices, office equipment, and stationery supplies to help you stay connected, organized, and productive.
          </p>
          <p>
            Established with a vision to provide reliable, affordable, and top-notch supplies, Irenbern has earned a reputation for excellence in customer service and product quality. We have built strong relationships with both local and international suppliers, ensuring that we can deliver the best products to our customers.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission is to provide Kenyans with easy access to high-quality electronics and stationery at competitive prices. We aim to be a trusted partner for businesses, schools, and individuals by offering products that enhance productivity and enrich daily life. We are committed to customer satisfaction and building long-lasting relationships with our clients.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'why'} text2={'choose us'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='capitalize'>Quality Assurance :</b>
          <p className='text-gray-600'>
            We guarantee top-quality products sourced from trusted suppliers, ensuring reliability, performance, and durability. Our electronics and stationery meet high standards, providing excellent value for our customers.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='capitalize'>Convenience :</b>
          <p className='text-gray-600'>
            Irenbern makes shopping easy with fast, reliable delivery services across Kenya. We provide hassle-free online ordering and ensure that your products reach you promptly and safely, no matter your location.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='capitalize'>Exceptional Customer Service :</b>
          <p className='text-gray-600'>
            Our dedicated support team ensures you have the best experience. Whether you need product advice or assistance with an order, we provide prompt, helpful service to meet your needs.
          </p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
