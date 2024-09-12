import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './productItem';

const RelatedProduct = ({category , subcategory}) => {

    const { products} = useContext(ShopContext);
    const [ related, setRelated ] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let proCopy = products.slice()
            proCopy = proCopy.filter(item => category === item.category && subcategory === item.subCategory)
            setRelated(proCopy)
        }
    }, [products])
  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Title text1={"Related"} text2={"PRODUCTS"}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                related.map((itm,i)=> <ProductItem key={i} name={itm.name} id={itm._id} img={itm.image} price={itm.price}/>)
            }
        </div>
    </div>
  )
}

export default RelatedProduct