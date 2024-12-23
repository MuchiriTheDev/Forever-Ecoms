import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link, useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
const Navbar = () => {
    const [visible , setVisible] = useState(false)
    const param = useParams()
    const { setShowSearch , getCartCount} = useContext(ShopContext)

  return (
    <div className='flex w-full justify-between items-center py-5 font-medium'>
        <Link to={'/'}><img src={assets.logo} className='w-36' alt="" /></Link>
        <ul className="hidden sm:flex justify-between items-center gap-5 text-sm text-gray-700">
            <NavLink to='/' className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className='w-3/4 border-none bg-earthYellow h-1 hidden duration-150 transition-all'/>
            </NavLink>
            <NavLink to='/collection' className="flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className='w-3/4 border-none bg-earthYellow h-1 hidden duration-150 transition-all'/>
            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className='w-3/4 border-none bg-earthYellow h-1 hidden duration-150 transition-all'/>
            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className='w-3/4 border-none bg-earthYellow h-1 hidden duration-150 transition-all'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <Link to={param !== '/collection' ? '/collection': null}>
                <img onClick={() => setShowSearch(true)}  src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            </Link>

            <div className="group relative">
                <Link to={`/login`}><img src={assets.profile_icon} className='w-5 cursor-pointer' alt=""/></Link>
                <div className="absolute hidden dropdown-menu right-0 group-hover:block pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-celticBlue text-white rounded">
                        <Link className='cursor-pointer hover:text-black'>My Profile</Link>
                        <Link to={'/orders'} className='cursor-pointer hover:text-black'>Orders</Link>
                        <Link className='cursor-pointer hover:text-black'>Log Out</Link>
                    </div>
                </div>
            </div>

            <Link to='/cart' className="relative">
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-celticBlue text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* Sidebar for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full": "w-0"}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=> setVisible(false)} className="flex cursor-pointer items-center gap-4 p-3">
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink to='/' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Home</NavLink>
                <NavLink to='/collection' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Collection</NavLink>
                <NavLink to='/about' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >About</NavLink>
                <NavLink to='/contact' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar