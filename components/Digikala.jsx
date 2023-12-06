import Image from 'next/image'
import React from 'react'
import styles from './Digikala.module.css'
const Digikala = () => {
  return (
    <div className={`${styles.outercontainer}`} >
   <Image src="/images/logo.svg" width={130}height={130} />
    </div>
  )
}

export default Digikala
