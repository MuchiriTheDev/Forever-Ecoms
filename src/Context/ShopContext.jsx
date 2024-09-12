import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = (props) =>{
    const [search ,setSearch] = useState("")
    const [showSearch , setShowSearch] = useState(false)
    const [cartItems , setCartItems ] = useState({})
    const navigate = useNavigate()
    const currency = "Ksh ";
    const deliveryFee = 100;
    

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems)

        if (cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    }
    const getCartCount = () => {
        let totalCount = 0
        for(const items in cartItems){
            for( const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }
    const updateQuantity = async (itemId, size , quantity) => {
        let cartData =structuredClone(cartItems)

        cartData[itemId][size] = quantity

        setCartItems(cartData)
    }
    const getCartAmount = () => {
        let totalAmount = 0
        for(const items in cartItems){
            let itemInfo = products.find(pro => pro._id == items)
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]> 0 ){
                        totalAmount += itemInfo.price *cartItems[items][item];
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }

    const value = {
       getCartCount,
        products, 
        currency,
         deliveryFee,
         search, 
         showSearch, 
         setSearch, 
         setShowSearch,
          cartItems, 
          addToCart, 
          updateQuantity,
          getCartAmount,
          navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider