import React, { useState } from 'react'

const Login = () => {
  const [curr , setCurr] =useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return curr ? (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4  text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Sign Up</p>
        <hr className='border-none h-[1.5px] w-8  bg-gray-800' />
      </div>
      <input required type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />
      <input required type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email Address' />
      <input required type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot Your Password</p>
        <p onClick={() => setCurr(false)} className='cursor-pointer'>Login Here</p>
      </div>
      <button type='submit' className='bg-celticBlue text-white font-light px-8 py-2 mt-4'>Sign Up</button>
    </form>
  ):(
  <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4  text-gray-800'>
    <div className="inline-flex items-center gap-2 mb-2 mt-10">
      <p className="prata-regular text-3xl">Login</p>
      <hr className='border-none h-[1.5px] w-8  bg-gray-800' />
    </div>
    <input required type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email Address' />
    <input required type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
    <div className="w-full flex justify-between text-sm mt-[-8px]">
      <p className='cursor-pointer'>Forgot Your Password</p>
      <p onClick={() => setCurr(true)} className='cursor-pointer'>Create An Account</p>
    </div>
    <button type='submit' className='bg-celticBlue text-white font-light px-8 py-2 mt-4'>Sign In</button>
  </form>
  )
}

export default Login