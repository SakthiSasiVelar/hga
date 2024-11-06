import ArtsCulture from "../ArtsCulture/ArtsCulture"
import InfoContainer from "../InfoContainer/InfoContainer"
import Styles from './body.module.css'

const Body = () => {
  return (
    <div className={Styles.container}>
        <InfoContainer />
        <ArtsCulture />
    </div>
  )
}

export default Body