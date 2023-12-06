import React from 'react'
import styles from './ShoppingCartNext.module.css'
import Image from 'next/image'
const ShoppingCartNext = () => {
  return (
    <div className={`${styles.outercontainer}`} >
        <div className={`${styles.container}`} >
      <div className={`${styles.img}`}><Image src='/images/nextempty.png' height={250} width={100}  className={`${styles.images}`}/></div>
   <div className={`${styles.text1}`}>لیست خرید بعدی شما خالی است!</div>
   </div>    

   <div className={`${styles.text2}`}>شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.</div>
   </div>
  )
}

export default ShoppingCartNext
