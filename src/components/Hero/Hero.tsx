import { Reveal } from '../utils/Reveal';
import GridBackground from '../GridBackground/GridBackground';
import './hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <GridBackground></GridBackground>
      <div className="hero__content">
        <Reveal>
          <h1 className="hero__headline-1 text--color-primary vertical--margin-35">
            Hi, I'm Natalia
            <span className="text--big-4 text--color-secondary">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="hero__headline-2 text--color-primary vertical--margin-35">
            I'm a{' '}
            <span className="hero__headline-2--bold text--color-secondary">
              Frontend Engineer
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="hero__content-text text--color-primary vertical--margin-35">
            With 10 years of experience in creating user-centric, responsive,
            and visually engaging interfaces. I specialize in building intuitive
            websites and applications that prioritize performance,
            accessibility, and responsiveness. Currently based in Berlin.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
