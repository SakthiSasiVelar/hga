import LogoImg from '../../assets/Logo/Logo.png'
import Styles from './logo.module.css'
const Logo = () => {
  return (
    <div>
        <a><img src={LogoImg} className={Styles.logo} /></a>
    </div>
  )
}

export default Logo