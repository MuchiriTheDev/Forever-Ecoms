import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './productItem';

const BestSeller = () => {
    const { products }= useContext(ShopContext);
    const [bestSeller, setBestSeller] =  useState([]);
    useEffect(()=>{
        const bestProducts = products.filter( item => (item.bestseller))
        setBestSeller(bestProducts.slice(0,5))
    }, [])

  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8 ">
            <Title text1={'best'} text2 = 'Seller'/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt incidunt quaerat id iste explicabo.
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map( (item, i) => {
                   return <ProductItem key={i} id={item._id} name={item.name} price={item.price} img={item.image} />
                })
            }
        </div>
    </div>
  )
}

export default BestSeller