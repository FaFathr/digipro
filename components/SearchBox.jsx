
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import styles from './SearchBox.module.css'
import { BsArrowBarLeft, BsFillBasket2Fill, BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import Cart from './Cart';
import Link from 'next/link';
const SearchBox = () => {
   const textForSearch= useRef('');
   const router= useRouter()
   const clickHandler =()=>{
    router.push(`/products/search/${textForSearch.current.value}`)
   };
  return (
    <div className={`${styles.outercontainer}`}>
      <div className={`${styles.digikalasearch}`} >
      <div className={`${styles.digikalaicon}`} >
   <Image className={`${styles.digikalaiconimg}`} src="/images/logo.svg" width={130}height={130} />
    </div>
    <div className={`${styles.SearchBox}`}>  
    <div className={`${styles.btncondiv}`}>
    <button className={`${styles.buttoncontainer1}`} onClick={clickHandler}  ><BsSearch/></button></div> 
    <div className={`${styles.searchdiv}`} > <input className={`${styles.textsreachbox}`} type="text" placeholder='جستوجو' ref={textForSearch}/>
</div>
    </div>
    </div>
    <div className={`${styles.logbasket}`}>
    <div className={`${styles.log}`} >
    <button className={`${styles.buttoncontainer2}`} >
     <Link  className={`${styles.link1}`} href="/SignUp"><h3 className={`${styles.txt2}`}>  <BsArrowBarLeft className={`${styles.txt3}`}/> ورود | ثبت نام  </h3></Link>
     </button>
    </div>
    <div className={`${styles.basket}`}>
    <button className={`${styles.buttoncontainer3}`}>
     <Link className={`${styles.link2}`} href="/shoppingCart"><Cart/></Link>
     </button>
    </div>
   </div>
    </div>
  )
}

export default SearchBox
