import { Fragment } from 'react';
import Hero from './components/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Contact } from './sections/Contact/Contact';
import { Social } from './components/Social/Social';
import { useScrollToSection } from './hooks/useScrollToSection';

function App() {
  useScrollToSection();

  return (
    <Fragment>
      <main>
        <header>
          <Social />
        </header>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </Fragment>
  );
}

export default App;
