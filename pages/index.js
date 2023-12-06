
import MainSlider from '@/components/MainSlider'
import { GET } from '@/repository/FetchRepository'
import Context from '@/contextAPI/Context'
import SevenIcons from '@/components/SevenIcons'
import IncredibleOffers from '@/components/IncredibleOffers'
import Header from '@/components/Header'
import FooterItems from '@/components/FooterItems'

export default function Home(props) {

  return (
  <div>
    <Context.Provider value={{ maninSliderImages:props.mainSliderRespons }}>

    <MainSlider/>
    <SevenIcons products={props.sevenIconsRespons}/>
    <IncredibleOffers  data={props.incredibleOffersRespons}/>
   
  </Context.Provider>
  </div>
  )
}
export async function getStaticProps(Context){
   const mainSliderRequest = await GET('/public/mainSlider')
   const mainSliderRespons = await mainSliderRequest.json()

   const sevenIconsRequest = await GET ('/SevenIcons')
   const sevenIconsRespons = await sevenIconsRequest.json()

   const incredibleOffersRequest = await GET ('/products/incredibleOffers')
   const incredibleOffersRespons = await incredibleOffersRequest.json()
  return{
  props:{mainSliderRespons , sevenIconsRespons , incredibleOffersRespons},
revalidate:600
}
}
