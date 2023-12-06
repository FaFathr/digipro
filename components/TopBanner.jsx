import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './TopBanner.module.css'
import { GET } from '@/repository/AxiosRepositpry'
const TopBanner = () => {
    const [TopBannerData,setTopBannerData]=useState({})
    useEffect(()=>{
        GET("/topBanner")
   .then((response)=>setTopBannerData(response.data))
    },
    [])
  return (
    <div className={`${styles.outercontainer}`}>
      <Image className={`${styles.banner}`} fill src={TopBannerData.imageUrl} alt="" />
    </div>
  )
}

export default TopBanner
