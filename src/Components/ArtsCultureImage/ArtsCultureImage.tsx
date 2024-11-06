import Styles from './artsCulture.module.css'
import CapOne from '../../assets/Images/CapOne .jpg'

const ArtsCultureImage = () => {
  return (
    <div className={Styles.imgContainer}>
         <img src={CapOne}  className={Styles.img}/>
    </div>
  )
}

export default ArtsCultureImage