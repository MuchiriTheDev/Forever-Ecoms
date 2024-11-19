import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, img, name, price}) => {
    const {products, currency, addToCart } =  useContext(ShopContext);
    const product = products.filter(item => item.id === id);

  return (
    <Link className='text-gray-700 cursor-pointer flex justify-center items-center flex-col  hover:shadow-lg shadow-sm hover:scale-105 p-3' to={`/product/${id}`}>
        <div className="overflow-hidden">
            <img src={img[0]} className='hover:scale-110 transition ease-in-out ' alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium mb-3'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem