import ArtsCulture from "../ArtsCulture/ArtsCulture"
import InfoContainer from "../InfoContainer/InfoContainer"
import Styles from './body.module.css'
import ProjectView from "../ProjectView/ProjectView"
import InsightsSection from "../Insights/Insights"

const Body = () => {
  return (
    <div className={Styles.container}>
        <InfoContainer />
        <ProjectView />
        <ArtsCulture />
        <InsightsSection/>
    </div>
  )
}

export default Body