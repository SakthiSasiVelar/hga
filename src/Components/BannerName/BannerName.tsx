import Styles from './bannerName.module.css'

const BannerName = () => {
  return (
    <div className={Styles.bannerNameOuterContainer}>
    <div className={Styles.bannerNameInnerContainer}>
        <h1 className={Styles.bannerName}>
        <a>
            Design Solutions<br/> for Reducing<br/>Embodied Carbon<br/>
        </a>
        </h1>
    </div>
    </div>
  )
}

export default BannerName