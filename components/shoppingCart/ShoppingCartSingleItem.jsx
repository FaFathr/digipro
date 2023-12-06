import React from 'react'
import styles from './ShoppingCartSingleItem.module.css'
import Image from 'next/image'
import ShoppingCartItemCounter from '../button/ShoppingCartItemCounter'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { CiShop } from "react-icons/ci";
import { TbShoppingCartCopy } from "react-icons/tb";
import { TfiTruck } from "react-icons/tfi";
import { CiTimer } from "react-icons/ci";
import { IoIosRadioButtonOn } from 'react-icons/io'
const ShoppingCartSingleItem = ({product}) => {
  return (
    <div className={`${styles.outercontainer}`}>
      <div className={`${styles.toptextcontainer}`} >
        <div className={`${styles.span1}`} >
          <span>سبد خرید شما</span>
        </div>
        <div className={`${styles.span2}`} >
          <span>1 کالا</span>
        </div>
      </div>
   <div className={`${styles.rightcontainer}`}> 
   <div className={`${styles.imgd}`}>
   <Image className={`${styles.images}`}  height={160} width={150} src={product.indexImageUrl} />
  </div>
  <div className={`${styles.namecontainer}`}>
     <span className={`${styles.name}`}  >{product.name}</span>
    </div>
   </div>
   <div className={`${styles.infocontainer}`}>
<span className={`${styles.infospane}`}><IoIosRadioButtonOn  className={`${styles.color1}`} />مشکی</span>
<span className={`${styles.infospane}`} ><RiSecurePaymentFill className={`${styles.color2}`} />گارانتی 18 ماهه دیجی کالا 1 </span>
<span className={`${styles.infospane}`}><CiShop className={`${styles.color3}`} />دیجی‌کالا</span>
<span className={`${styles.infospane}`}><TbShoppingCartCopy className={`${styles.color4}`}/>موجود در انبار دیجی‌کالا</span>
<span className={`${styles.infospane}`}><TfiTruck className={`${styles.color5}`}/>ارسال دیجی‌کالا</span>
<span className={`${styles.infospane}`}><CiTimer className={`${styles.color6}`}/>ارسال امروز (فعلا در شهر تهران و کرج)</span>
    </div>
   <div className={`${styles.leftcontainer}`}>
    <div className={`${styles.leftbottomcontainer}`}>
  <ShoppingCartItemCounter  productId={product.id}  />
    </div> 
    <div className={`${styles.containerprice}`}>
      <span className={`${styles.price}`}  >{product.price}تومان </span>
      </div>
   </div>
    </div>
  )
}

export default ShoppingCartSingleItem
