import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latest, setLatest ]= useState([])

    useEffect(() => {
      setLatest(products.slice((products.length - 9), products.length));
    }, [])
    

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
            Irenbern General Supplies offers quality electronics and stationery across Kenya.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {/* Rendering products */}
        {
          latest.map((items , i) =>{
            return <ProductItem key={i} id={items._id} img={items.image} name={items.name} price={items.price}/>
          })
        }
      </div>
    </div>
  )
}

export default LatestCollection
