import NavBar from "../Navbar/NavBar"
import Styles from "../Header/Header.module.css"
import BannerName from "../BannerName/BannerName"
import BannerSliderContainer from "../BannerSliderContainer/BannerSliderContainer"


const Header = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.topContainer}>
            <NavBar />
             <BannerName />
        </div>
        <div>
            <BannerSliderContainer />
        </div>
    </div>
  )
}

export default Header