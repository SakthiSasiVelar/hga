import Styles from './BannerSlider.module.css'
import { useState } from 'react'

interface props{
    content : string
}

const BannerSlider  :React.FC<props> = (props)  => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(prevState => !prevState);
    };
  return (
    <div className={Styles.container} >
        <div onClick={handleClick}>
            <div className={`${Styles.slider} ${isActive ? Styles.active : ''}`}> </div>   
        </div>
        <div >
             <p className={Styles.content}>{props.content}</p>
        </div>
    </div>
  )
}

export default BannerSlider