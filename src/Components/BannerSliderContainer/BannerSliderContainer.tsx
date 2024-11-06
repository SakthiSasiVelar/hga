import Styles from './bannerSliderContainer.module.css'
import BannerSlider from '../BannerSlider/BannerSlider'
import { bannerSliderContents } from '../../utils/constants'

const BannerSliderContainer = () => {
  return (
    <div className={Styles.container}>
      {
        bannerSliderContents.map((slider) =>{
          return <BannerSlider  key={slider.id} content={slider.content} isActive={slider.isActive}/>
        })
      }
    </div>
  )
}

export default BannerSliderContainer