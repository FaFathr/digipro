import Image from 'next/image'
import React from 'react'
import styles from './DigiPlusImg.module.css'
const DigiPlusImg = ({product}) => {
  return (
    <div className={`${styles.imagesorg}`}>
   <Image className={`${styles.images}`}  height={40} width={40} src={product.indexImageUrl} />
    </div>
  )
}

export default DigiPlusImg
