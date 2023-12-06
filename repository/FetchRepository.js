import { useContext } from 'react'
import Constans from '../configuration/Constans'
export const GET = (url) => {
   return fetch(`${Constans.REST_API_ADDRESS}${url}`);
}