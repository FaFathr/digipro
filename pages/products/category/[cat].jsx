import Card from '@/components/Card'
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[cat].module.css'

const cat = ({data}) => {
  return (
    <div className={`${styles.outercontainer}`}>
      {
        data.map((item)=>{
            return <Card product={item}/>
        })
      }
    </div>
  )
}

export default cat

export async function getServerSideProps(context){
  const response  = await GET(`/products/${context.params.cat}`)
  const data= await response.json()
  return{
    props:{data},
  }
}