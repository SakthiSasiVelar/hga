
import CommunityInvestment  from '../../assets/CommunityInvestment.jpg';
import space from  '../../assets/space.jpg';
import Campus from  '../../assets/Campus.jpg';
import CulturalCampus  from '../../assets/CulturalCampus.jpg';
import Sustainability from '../../assets/Sustainable.jpg';
import CompanyCulture from "../../assets/CompanyCulture.jpg"
import CampusView from '../../assets/CampusView.jpg';
import Hospitality from '../../assets/Hospitality.jpg';
import Styles from "./projectView.module.css";

interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: CommunityInvestment,
    title: "Enduring Community Investment",
    subtitle: "METROHEALTH THE GLICK CENTER"
  },
  {
    id: 2,
    image: space,
    title: "A Space to Reflect the Current Times",
    subtitle: "SAN FRANCISCO CHRONICLE"
  },
  {
    id: 3,
    image: Campus,
    title: "Urban Design, Historical Meaning",
    subtitle: "WATER WORKS"
  },
  {
    id: 4,
    image: CulturalCampus,
    title: "Cultural and Social Heart of a Mixed-Use Campus",
    subtitle: "CAPITAL ONE HALL AT CAPITAL ONE CENTER"
  },
  {
    id: 5,
    image: CompanyCulture,
    title: "Fostering Company Culture and Collaboration",
    subtitle: "KINDEVA"
  },
  {
    id: 6,
    image: CampusView,
    title: "Weaving the Campus Together",
    subtitle: "CSU MONTEREY BAY STUDENT UNION"
  },
  {
    id: 7,
    image:Hospitality,
    title: "Hospitality-Inspired Healthcare Experience",
    subtitle: "CRYSTAL CLINIC"
  },
  {
    id: 8,
    image: Sustainability,
    title: "Sustainable Design on Lake Superior",
    subtitle: "WOLF RIDGE ENVIRONMENTAL LEARNING CENTER"
  }
];

const ProjectView = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h5 className={Styles.title}>Featured Projects</h5>
        <a href="/work" className={Styles.viewAll}>VIEW ALL WORK</a>
      </div>
      
      <div className={Styles.projectGrid}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`${Styles.projectCard} ${project.isWide ? Styles.wideCard : ''}`}
          >
            <div className={Styles.imageWrapper}>
              <img 
                src={project.image} 
                alt={project.title}
                className={Styles.projectImage}
              />
            </div>
            <div className={Styles.projectInfo}>
              <h6 className={Styles.projectTitle}>{project.title}</h6>
              <p className={Styles.projectSubtitle}>{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProjectView;