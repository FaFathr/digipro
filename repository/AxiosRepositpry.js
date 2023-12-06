import Constans from '../configuration/Constans'
import axios from 'axios'
export const GET=(url)=>{
   return axios.get(`${Constans.REST_API_ADDRESS}${url}`)
}
export const POST =( url , requestbody) =>{
   return axios.post(`${Constans.REST_API_ADDRESS}${url}`,requestbody,
   {
      headers: {
         "Content-Type": "application/json",

      },
   }
   )
}