import React, { useContext } from 'react'
import styles from './MainSlider.module.css'
import "react-image-gallery/styles/css/image-gallery.css";
import Context from '@/contextAPI/Context';
import ReactImageGallery from 'react-image-gallery';
const MainSlider = () => {
    const { maninSliderImages }= useContext(Context);
  return (
    <div>
      <ReactImageGallery
      key={maninSliderImages.id}
      id={maninSliderImages.id}
      autoPlay={true}
      slideInterval={2000}
      showPlayButton={false}
      showFullscreenButton={false}
      isRTL={true}
      items={maninSliderImages}
      showThumbnails={false}


      
      />
    </div>
  )
}

export default MainSlider
