import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-section">
        <h1>Natalia Alpizar</h1>
        <h3>Frontend Engineer</h3>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am a Frontend Engineer with a passion for designing...
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Skill-1</li>
          <li>Skill-2</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>
            Description
          </p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>
            Description
          </p>
        </div>
      </section>

      <footer className="footer-section">
        <p>© 2025 Natalia Alpizar | <a href="mailto:natalpizarm@gmail.com">natalpizarm@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;