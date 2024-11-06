import Styles from "./insights.module.css";
import interiorImg from "../../assets/insights.jpg";
const InsightsSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contentContainer}>
        <div className={Styles.contentSection}>
          <span className={Styles.label}>INSIGHTS</span>
          <h2 className={Styles.title}>
            Wellbeing and Design: Healthier & Sustainable Interior Materials
            Selection Guide
          </h2>
          <p className={Styles.description}>
            As designers, we recognize the incredible opportunity—and
            responsibility—we have to do everything we can to build a more
            sustainable future. From improving indoor air quality to reducing
            construction waste, the materials architects and designers specify
            matter, and our choices represent an enormous opportunity to improve
            the health of the planet and the people who inhabit it.
          </p>
          <a href="#" className={Styles.learnMore}>
            LEARN MORE
          </a>
        </div>
        <div className={Styles.bullets}>
          <span className={`${Styles.bullet} ${Styles.active}`}></span>
          <span className={Styles.bullet}></span>
          <span className={Styles.bullet}></span>
          <span className={Styles.bullet}></span>
          <span className={Styles.bullet}></span>
        </div>
      </div>
      <div className={Styles.imageContainer}>
        <img
          src={interiorImg}
          alt="Interior Design"
          className={Styles.mainImage}
        />
      </div>
    </div>
  );
};

export default InsightsSection;
