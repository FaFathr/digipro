import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Totals.module.css'
import { TbCoin } from 'react-icons/tb';
import { BsExclamationCircle } from 'react-icons/bs';
const Totals = () => {
  const shoppingCart= useSelector((state)=>state.shoppingCart);
  return (
    <div className={`${styles.outercontainer}`}>
      <div className={`${styles.totalprice}`}>
        <div className={`${styles.text}`}>
       <span className={`${styles.name}`}>  قیمت کالا </span> 
       </div>
      </div>
      <div className={`${styles.price}`} >{shoppingCart.totalPrice}
      <span className={`${styles.toman}`}>تومان</span>
        </div>
      <div className={`${styles.totalprice}`}>
     <div className={`${styles.text}`}>
       <span className={`${styles.name}`} >جمع سبد خرید</span> 
      </div>
      </div>
    <div className={`${styles.price}`}>{shoppingCart.totalPrice}
        <span className={`${styles.toman}`}>تومان</span>
    </div>
   <div className={`${styles.submitbutton}`}>
  <button className={`${styles.submitbutton1}`}> 
  <a  className={`${styles.link2}`} href="/LoginRe">
    <span className={`${styles.submit}`} >ثبت سفارش</span> </a>
</button>
   </div>
   <div className={`${styles.footercontainer}`}>
<div className={`${styles.footercontainer1}`}>
<TbCoin  className={`${styles.coin}`}/>
<span  className={`${styles.club}`}>دیجی کلاب</span>
<BsExclamationCircle  className={`${styles.circle}`} />
<span className={`${styles.score1}`}>150</span>
<span className={`${styles.score}`} >امتیاز</span>
</div>
   </div>
   <div className={`${styles.more}`} >هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند</div>
    </div>
 
  )
}

export default Totals
