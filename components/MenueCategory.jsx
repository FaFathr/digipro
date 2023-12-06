import React from 'react'
import styles from './MenueCategory.module.css'
import { AiOutlineBars, AiOutlinePercentage, AiTwotoneCreditCard, AiTwotoneRest } from 'react-icons/ai'
import { BsCreditCard } from 'react-icons/bs'
import { FaSuperpowers } from 'react-icons/fa'
import { TbGiftCard } from 'react-icons/tb'
const MenueCategory = () => {
  return (
    <div className={`${styles.outercontainer}`} >
      <ul className={`${styles.container}`}>
  <li className={`${styles.containermenu}`}>
    <a  className={`${styles.aorg}`}   href="default.asp"><AiOutlineBars className={`${styles.icoorg}`} />دسته بندی کالاها</a>
    </li>
  <li className={`${styles.containermenu}`}>
    <a   className={`${styles.a}`}  href="news.asp"> <AiOutlinePercentage  className={`${styles.ico}`}/>شگفت انگیز</a>
    </li>
  <li className={`${styles.containermenu}`} >
    <a   className={`${styles.a}`}   href="contact.asp"> <AiTwotoneRest  className={`${styles.ico}`}/>سوپر مارکت</a>
    </li>
  <li className={`${styles.containermenu}`}  >
    <a   className={`${styles.a}`}  href="about.asp"> <TbGiftCard   className={`${styles.ico}`}/>  کارت هدیه</a>
    </li>
  <li className={`${styles.containermenu}`} >
    <a   className={`${styles.a}`}   href="about.asp"> <FaSuperpowers  className={`${styles.ico}`}/>پرفروش ترین</a>
    </li>
  <li className={`${styles.containermenu}`} >
    <a    className={`${styles.a}`}     href="about.asp">  <BsCreditCard  className={`${styles.ico}`}/>تخفیف و پیشنهادها</a>
    </li>

</ul>
    </div>
  )
}

export default MenueCategory
