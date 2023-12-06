import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[textForSearch].module.css'
import Card from '@/components/Card'


const textForSearch = ({ data }) => {
  return (
    <div className={`${styles.outercontainer}`}>
    {
      data.map((item) => {
          return <Card product={item}/>
      })
    }
  </div> 
  )
}

export default textForSearch
export async function getServerSideProps(context){
  const response  = await GET(`/products/search/${context.params.textForSearch}`)
  const data= await response.json()
  if(data.length===0)
  return{
    notFound:true,
  }
  return{
    props:{data},
  }
}