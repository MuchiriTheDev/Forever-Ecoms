import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [proData, setProData] = useState(null);
  const [imgMain, setImgMain] = useState('');
  const [selected , setSelected] = useState('')

  // Fetch Product Data based on productId
  const fetchProData = async () => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProData(product);
      setImgMain(product.image[0]); // Use first image or empty string if undefined
    }
  };

  useEffect(() => {
    fetchProData();
  }, [productId, products]);

  if (!proData) {
    return (
    <div className='opacity-0'>
      <h1>Loading...</h1>
    </div>
    ); // Placeholder for when data is loading
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll gap-3 sm:justify-normal sm:w-[18.75%] w-full">
            {proData.image?.map((img, i) => (
              <img
                onClick={() => setImgMain(img)}
                src={img}
                key={i}
                alt=''
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={imgMain} className='w-full h-auto' alt="" />
          </div>
        </div>

        {/* Product info */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{proData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {/* Assuming the stars rating feature */}
            {Array.from({ length: 4 }, (_, i) => (
              <img key={i} src={assets.star_icon} alt='' className='w-3.5' />
            ))}
              <img src={assets.star_dull_icon} alt='' className='w-3.5' />
              <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium '>{currency}{proData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {proData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {proData.sizes.map((itm, i) => <button onClick={() => setSelected(itm)} className={`border py-2 px-4 bg-gray-100 ${itm === selected ? "border-orange-500" : ""}`} key={i}>{itm}</button>)}
            </div>
          </div>
          <button onClick={() => addToCart(proData._id , selected)} className="bg-celticBlue text-white px-8 py-3 text-sm active:bg-gray-700 uppercase ">Add to cart</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7-days</p>
          </div>
        </div>
      </div>


      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
           {proData.description}
          </p>
          <p>
           {proData.description}
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProduct category={proData.category} subcategory={proData.subCategory}/>
    </div>
  );
};

export default Product;
