import Styles from './infoContainer.module.css'

const InfoContainer = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.innerContainer}>
            <div className={Styles.contentContainer}>
             <h2 className={Styles.heading}>It is no small thing to leave  a mark on the world</h2>
            </div>
            <div className={Styles.contentContainer}>
            <p>Our responsibility is both inspiring and humbling: to create a positive, lasting impact through design. We value empathy, are fueled by curiosity, and embrace the hard work that leads to innovation. Our goal is to create a company and culture where everyone—employees and clients—can together do the best work of their lives.</p>
            </div>
        </div>
       
    </div>
  )
}

export default InfoContainer