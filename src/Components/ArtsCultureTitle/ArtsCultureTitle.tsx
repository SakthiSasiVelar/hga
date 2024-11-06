import Styles from './artsCultureTitle.module.css'
import { artsCultureTitle } from '../../utils/constants'

const ArtsCultureTitle = () => {
  return (
    <div className={Styles.container}>
           <div className={Styles.innerContainer}>
                 {
                    artsCultureTitle.map((title) =>{

                        return (<div className={Styles.titleContainer}>
                                <a key={title.id} className={`${Styles.link} ${title.isActive ? Styles.active : ''}`}>{title.name}</a>
                            </div> )
                        
                        
                    })
                 }
           </div>
    </div>
  )
}

export default ArtsCultureTitle

