import { Fragment } from 'react/jsx-runtime';
import { HeaderSection } from '../../components/HeaderSection/HeaderSection';
import { Social } from '../../components/Social/Social';
import { Reveal } from '../../components/utils/Reveal';

export function About() {
  return (
    <Fragment>
      <section id="about" className="section__container text--color-primary">
        <HeaderSection title="About" textAlignment="left" />
        <div className="about grid--2-cols">
          <div className="about__column">
            <Reveal>
              <p>
                A little bit about me... I'm originally from Costa Rica, now
                based in Berlin since 2022. I’m loving the fresh experiences
                this vibrant city has brought into my life!
              </p>
            </Reveal>
            <Reveal>
              <p>
                Throughout my professional journey, I’ve been dedicated to
                creating intuitive, responsive, and inclusive websites and apps.
                I focus on making sure every user has a seamless experience, no
                matter their device or needs. I’m also well-versed in A/B
                testing, helping teams rapidly iterate and make data-driven
                decisions to enhance UX.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Outside of work, I enjoy spending time with my husband and our
                three (wonderfully demanding) dogs.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I’m currently exploring new opportunities. If you think we’d
                make a great team, feel free to reach out!
              </p>
            </Reveal>
            <Reveal>
              <div className="align--center-gap-10">
                <p className="align--center-gap-10 text--color-secondary text--600">
                  My links{' '}
                  <svg
                    stroke="#ed6b2e"
                    fill="#ed6b2e"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                  </svg>
                </p>

                <Social></Social>
              </div>
            </Reveal>
          </div>
          <div className="about__column">
            <Reveal>
              <div>
                <h4 className="align--center-gap-10 heading--4">
                  <svg
                    stroke="#ed6b2e"
                    fill="#ed6b2e"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                  </svg>
                  Use at work
                </h4>
                <ul className="grid-col-list">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>Github</li>
                  <li>Webpack</li>
                  <li>Storybook</li>
                  <li>Design Tokens</li>
                  <li>Figma</li>
                  <li>Jira</li>
                  <li>Web Performance Metrics</li>
                  <li>Google Tag Manager</li>
                  <li>Google Analytics</li>
                  <li>VWO</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h4 className="align--center-gap-10 heading--4">
                  <svg
                    stroke="#ed6b2e"
                    fill="#ed6b2e"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                  </svg>
                  Use for fun
                </h4>
                <ul className="grid-col-list">
                  <li>Framer motion</li>
                  <li>Vue</li>
                  <li>Tailwind</li>
                  <li>AWS</li>
                  <li>Next</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
