import styles from './ProjectsStyles.module.css';
import rtsld from '../../assets/rtsld.png';
import updateU from '../../assets/updateU.png';
import heroImg from '../../assets/hero-img-small.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={rtsld}
          link="https://github.com/shrestha1804/RTSLD---LSTM-Dense-NN"
          h3="Sign Language Detection"
          p="OpenCV | Tensorflow"
        />
        <ProjectCard
          src={updateU}
          link="https://github.com/shrestha1804/Newsapp-UpdateU"
          h3="updateU - News Feed"
          p="HTML | CSS | JS | API"
        />
        <ProjectCard
          src={heroImg}
          link="https://github.com/shrestha1804/portfolio_shrestha"
          h3="Portfolio"
          p="HTML | CSS | JS | ReactJS"
        />
        
      </div>
    </section>
  );
}

export default Projects;
