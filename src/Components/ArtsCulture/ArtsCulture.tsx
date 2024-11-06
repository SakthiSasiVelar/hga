import ArtsCultureContent from '../ArtsCultureContent/ArtsCultureContent'
import ArtsCultureImage from '../ArtsCultureImage/ArtsCultureImage'
import ArtsCultureTitle from '../ArtsCultureTitle/ArtsCultureTitle'
import Styles from './artsCulture.module.css'


const ArtsCulture = () => {
  return (
    <div className={Styles.container}>
       <ArtsCultureImage />
       <ArtsCultureTitle />
       <ArtsCultureContent />
       
    </div>
  )
}

export default ArtsCulture