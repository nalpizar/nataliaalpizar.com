import { Reveal } from '../utils/Reveal';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="about-section">
      <div className="profile-image">
        <Reveal>
          <h1 className="headline-1">
            Hi, I'm Natalia<span className="big">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="headline-2">
            I'm a <span className="">Frontend Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
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
