
import Image from 'next/image'
import React from 'react'
import styles from './SevenIcons.module.css'
import Link from 'next/link'


const SevenIcons = ({products}) => {
    return<div className={`${styles.outercontainer}`}>
       {
        products.map(item=>{
            return (
           <Link className={`${styles.labellink}`} href={`/products/category/${item.url}`}>
            <div  className={`${styles.itemContainer}`}>
               <Image src={`/images/${item.iconName}`} width={60} height={60}/>
                <label className={`${styles.labelContainer}`}>{item.label}</label>
            </div>
            </Link>
            )
        })
       }
    </div>
}

export default SevenIcons
