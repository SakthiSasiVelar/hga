import TopLinkBar from "../TopLinkBar/TopLinkBar"
import Styles from "./navBar.module.css"
import Logo from "../Logo/Logo"
import BottomLinkBar from "../BottomLinkBar/BottomLinkBar"

const NavBar = () => {
  return (
    <div className={Styles.container}>
       <TopLinkBar />
       <div className={Styles.bottomLinkContainer}>
         <Logo />
         <BottomLinkBar />
       </div>
       
    </div>
  )
}

export default NavBar