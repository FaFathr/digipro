import React from 'react'
import styles from './AddToShoppingCart.module.css'
import { useDispatch } from 'react-redux'
import { addNewItem } from '@/redux/features/ShoppingCart/ShoppingCartSlice'
const AddToShoppingCart = ({product}) => {
    const dispatch =useDispatch();
    const clickHandler = () =>{
        dispatch(addNewItem(product));
    }
  return (
    <div className={`${styles.outercontainer}`}>
      <span onClick={clickHandler} >خرید</span>
    </div>
  )
}

export default AddToShoppingCart
