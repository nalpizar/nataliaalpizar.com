import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="header-section">
        <h1>Natalia Alpizar</h1>
        <h3>Frontend Engineer</h3>
      </header> */}

      <section className="about-section">
          <div className="profile-image">
              <h1>Hi, I'm Natalia<span className='big'>.</span></h1>
        
              <h2>I'm a <span>Frontend Engineer</span></h2>

              <p>
                With 10 years of experience in creating user-centric, responsive,
                and visually engaging interfaces. I specialize in building intuitive websites and
                applications that prioritize performance, accessibility, and responsiveness. Currently based in Berlin.
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