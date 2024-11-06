import Styles from './topLinkBar.module.css'
import { MdOutlineSearch } from "react-icons/md";

const TopBar = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.navContainer}>
             <a className={Styles.linkName}>CAREERS</a>
             <a className={Styles.linkName}>CONTACT</a>
             <a className={Styles.linkName}>NEWSLETTER</a>
             <MdOutlineSearch  className={Styles.searchButton}/>
        </div>
    </div>
  )
}

export default TopBar