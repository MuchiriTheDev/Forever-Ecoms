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
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione illum magnam fugiat excepturi molestias autem quidem aperiam blanditiis ipsum non aspernatur perspiciatis dicta nesciunt cupiditate, esse consequuntur omnis nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae aliquid dignissimos recusandae eligendi. Error, reiciendis, id quo harum voluptate labore, quae a corrupti cum nobis eos atque laboriosam doloribus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut reprehenderit non in corrupti officiis sequi nesciunt perspiciatis. Possimus tempore quis a aliquid consequatur asperiores voluptas obcaecati, exercitationem, rem incidunt sapiente.
          </p>
          <b>Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi atque possimus mollitia at quis officia autem. Magni ipsam necessitatibus, illum, nesciunt quam tenetur, totam omnis quis corrupti quo praesentium?
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit mollitia dolorem ipsum deleniti distinctio?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='capitalize'>convenience :</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit mollitia dolorem ipsum deleniti distinctio?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='capitalize'>Exceptional Customer Service :</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit mollitia dolorem ipsum deleniti distinctio?
          </p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About