import React from 'react'
import { useSelector } from 'react-redux';
import DigiPlusImg from './DigiPlusImg';

const DigiPlusCode = () => {
    const shoppingCart= useSelector((state)=>state.shoppingCart);

  return (
   <div>
    <div>
     {
      shoppingCart.items.map((item)=>{
      return   <DigiPlusImg product={item}/>
      })
     }
     </div>  
    </div>
  )
}

export default DigiPlusCode
