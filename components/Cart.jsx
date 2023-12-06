import React from 'react'
import {RiShoppingCartLine} from 'react-icons/ri'
import styles from './Cart.module.css'
import { useSelector } from 'react-redux';

const Cart = () => {

  return (
 
    <div className={`${styles.outer}`}>
      <div className={`${styles.icon}`}>  <RiShoppingCartLine /></div>
      <div className={`${styles.spanorg}`}><span className={`${styles.span}`}>2</span>
      </div> 
    </div>
  )
}

export default Cart
