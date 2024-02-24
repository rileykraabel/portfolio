import React from 'react';
import NavBar from './NavBar.jsx';

import './About.css';

function About() {
  return (
    <>
      <NavBar />
      <div className="about-page">
        <h2>About Me</h2>
        <div className="school-background">
          <p>I am a Junior at the University of Utah, majoring in Software Development.</p>
          <p>Right now, I am most passionate about UI / UX and front-end development. </p>
        </div>
      </div>
    </>
  );
}

export default About