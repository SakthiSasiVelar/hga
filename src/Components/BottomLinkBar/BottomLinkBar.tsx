import Styles from './bottomLinkBar.module.css'

const BottomLinkBar = () => {
  return (
    <div className={Styles.container}>
       <a className={Styles.linkName}>EXPERTISE</a>
       <a className={Styles.linkName}>PORTFOLIO</a>
       <a className={Styles.linkName}>PEOPLE</a>
       <a className={Styles.linkName}>INSIGHTS</a>
       <a className={Styles.linkName}>NEWS & EVENTS</a>
       <a className={Styles.linkName}>ABOUT</a>
       <a className={Styles.linkName}>LOCATIONS</a>
    </div>
  )
}

export default BottomLinkBar