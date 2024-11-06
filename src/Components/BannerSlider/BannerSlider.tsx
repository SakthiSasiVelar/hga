import Styles from './BannerSlider.module.css'

interface props{
    content : string,
    isActive : boolean
}

const BannerSlider  :React.FC<props> = (props)  => {


  return (
    <div className={Styles.container} >
        <div >
            <div className={`${Styles.slider} ${props.isActive ? Styles.active : ''}`}> </div>   
        </div>
        <div >
             <p className={`${Styles.content} ${props.isActive ? Styles.contentColor : ''}`}>{props.content}</p>
        </div>
    </div>
  )
}

export default BannerSlider