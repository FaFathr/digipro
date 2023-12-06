import React from 'react'
import Carusel from './Carusel'
import styles from './IncredibleOffers.module.css'
import Image from 'next/image'
const IncredibleOffers = (props) => {
  return (
    <div className={`${styles.outercontainer}`}>
    <div className={`${styles.carouselcontainer}`}>
       <Carusel cardsCount={5} data={props.data}/>
    </div>
    <div className={`${styles.rightcontainer}`}>
        <Image src='/images/amazingTypo.png' height={100} width={90} className={`${styles.containerimg1}`}/>
        <Image src='/images/box.png' height={120} width={120} className={`${styles.containerimg2}`}/>

    </div>
     </div>
  )
}

export default IncredibleOffers
