import NavBar from './NavBar.jsx';
import './Projects.css';

function Projects() {
  return (
    <>
      <NavBar />
      <div className="projects-page">
        <h2>My Projects</h2>
        <div className="project-info">
          <p>Project 1</p>
        </div>
      </div>
    </>
  );
}

export default Projects