import Image from 'next/image'
import React from 'react'
import styles from './Empty.module.css'
const Empty = () => {
  return (
    <div  className={`${styles.outercontainer}`} >
      <div className={`${styles.container}`}>
    <div className={`${styles.img}`}><Image src='/images/emptyCart.svg' height={250} width={100}  className={`${styles.images}`}/></div>
    <div className={`${styles.h2}`}><span>سبد خرید شما خالی است!</span></div>
    <div className={`${styles.h6}`}><span>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</span></div>
    </div>
    </div>
  )
}

export default Empty
