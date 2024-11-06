import Styles from './artsCulture.module.css'

const ArtsCultureContent = () => {
  return (
    <div className={Styles.container}>
       <div className={Styles.innerContainer}>
          <h4>MARKETS</h4>
          <p className={Styles.title}>Arts & Culture</p>
          <p>By their very nature, these buildings are inspirational places for people who seek inspiration and connection. But at the same time, they are institutions with concrete, mission-related needs and expectations. We have over six decades of experience designing beloved cultural destinations with expertise, innovation, and imagination.</p>
          <a href='#' className={Styles.link}>Learn More</a>
       </div>
    </div>
  )
}

export default ArtsCultureContent