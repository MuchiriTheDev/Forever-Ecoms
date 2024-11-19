import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '>Subscribe now & get 20% off your next purchase</p>
        <p className="text-gray-400 mt-3">
            Stay updated with the latest deals and exclusive offers. Subscribe to our newsletter for discounts and product updates.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'  >
            <input className='w-full sm:flex-1 outline-none ' required type="email" name="email-sub" placeholder='Enter your email for exclusive offers' id="email-sub" />
            <button type='submit'  className='bg-celticBlue text-white text-xs py-4 px-10 '>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter
