import { Fragment } from 'react/jsx-runtime';
import Hero from './components/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Contact } from './sections/Contact/Contact';
import { Social } from './components/Social/Social';

function App() {
  return (
    <Fragment>
      <main>
        <header>
          <Social></Social>
        </header>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      {/* <footer className="footer-section">
        <p>
          © 2025 Natalia Alpizar |{' '}
          <a href="mailto:natalpizarm@gmail.com">natalpizarm@gmail.com</a>
        </p>
      </footer> */}
    </Fragment>
  );
}

export default App;
