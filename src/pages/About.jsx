import React from 'react';
import './style/About.css';

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        Hello! I'm <strong>Alibek Komilboyev</strong>, a passionate web developer with experience in building responsive and interactive web applications. 
        I specialize in React, JavaScript, and frontend development, always eager to learn new technologies and improve my skills.
      </p>

      <h2 className="about-subtitle">My Skills</h2>
      <ul className="skills-list">
        <li>React.js & Redux</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 & CSS3 (Responsive design)</li>
        <li>Node.js & Express (Basic backend)</li>
        <li>Git & GitHub</li>
      </ul>

      <h2 className="about-subtitle">Interests</h2>
      <p className="about-text">
        Besides coding, I enjoy exploring new technologies, gaming, and creating projects that challenge my problem-solving skills. 
        I'm always motivated to contribute to open-source and collaborate on exciting projects.
      </p>
    </div>
  );
}

export default About;
