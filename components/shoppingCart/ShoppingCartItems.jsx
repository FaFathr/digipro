import React from 'react'
import { useSelector } from 'react-redux'
import Empty from './Empty';
import ShoppingCartSingleItem from './ShoppingCartSingleItem';
import DigiPlus from './DigiPlus';
import styles from './ShoppingCartItems.module.css'
import Totals from './Totals';


const ShoppingCartItems = () => {
   const shoppingCart= useSelector((state)=>state.shoppingCart);
  if (shoppingCart.totalCount === 0)
  {
    return (
        <div className={`${styles.outercontainer}`}>
    <DigiPlus/>
    <Empty /> 
        </div>
    )
  }

  return (

    <div>
      <div className={`${styles.containertopleft}`} >
        <div className={`${styles.containerdigi}`}>
          <DigiPlus/>
        </div>
        <div className={`${styles.containertotal}`}>
          <Totals/>
        </div>
        </div>
        <div>
     {
      shoppingCart.items.map((item)=>{
      return   <ShoppingCartSingleItem product={item}/>
      })
     }
     </div> 
  
    </div>
  )
}

export default ShoppingCartItems
