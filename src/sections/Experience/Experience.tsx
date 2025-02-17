import { Fragment } from 'react/jsx-runtime';
import { HeaderSection } from '../../components/HeaderSection/HeaderSection';
import './experience.scss';
import { Reveal } from '../../components/utils/Reveal';

export function Experience() {
  return (
    <Fragment>
      <section
        id="experience"
        className="section__container text--color-primary"
      >
        <HeaderSection title="Experience" textAlignment="left" />
        <div className="experience">
          <div className="experience__container">
            <Reveal width="100%">
              <div className="experience__headline">
                <h4 className="heading--4">Plan A</h4>
                <p>2025</p>
                <h5 className="heading--4 text--color-secondary">
                  Frontend Engineer
                </h5>
                <p>Berlin, Germany</p>
              </div>
            </Reveal>
            <Reveal>
              <p className="experience__description">
                Hired for the Analytics and Reporting squad to develop reports
                showing clients their CO2 emissions and providing insights on
                how to reduce them to achieve carbon neutrality.
              </p>
            </Reveal>
            <Reveal>
              <ul className="grid-col-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Recharts</li>
              </ul>
            </Reveal>
          </div>
          <div className="experience__container">
            <Reveal width="100%">
              <div className="experience__headline">
                <h4 className="heading--4">
                  Zonda (BHI was adquired by Zonda)
                </h4>
                <p>2024</p>
                <h5 className="heading--4 text--color-secondary">
                  Frontend Engineer
                </h5>
                <p>Remote</p>
              </div>
            </Reveal>
            <Reveal>
              <p className="experience__description">
                Worked on the rebrand project following the company's
                acquisition, implementing Design Tokens and Style Dictionary for
                consistency. Implement design system best practices while
                collaborating with the team.
              </p>
            </Reveal>
            <Reveal>
              <ul className="grid-col-list">
                <li>Storybook</li>
                <li>Design Tokens</li>
                <li>Redux</li>
                <li>SASS</li>
                <li>JavaScript</li>
              </ul>
            </Reveal>
          </div>
          <div className="experience__container">
            <Reveal width="100%">
              <div className="experience__headline">
                <h4 className="heading--4">Builder Homesite Inc</h4>
                <p>2020 - 2024</p>
                <h5 className="heading--4 text--color-secondary">
                  Frontend Engineer
                </h5>
                <p>Remote</p>
              </div>
            </Reveal>
            <Reveal>
              <p className="experience__description">
                Contributed to a redesign migration and built interactive UIs.
                Led the A/B testing strategy, from research and collaboration
                with stakeholders to implementation. Tracked user activity to
                understand their needs, and helped optimize site performance,
                speed, and conversions across devices with responsive designs
                and a focus on web performance metrics.
              </p>
            </Reveal>
            <Reveal>
              <ul className="grid-col-list">
                <li>React</li>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Webpack</li>
                <li>Web Performance Metrics</li>
                <li>Google Analytics</li>
                <li>A/B Testing</li>
                <li>VWO</li>
              </ul>
            </Reveal>
          </div>
          <div className="experience__container">
            <div className="experience__headline">
              <h4 className="heading--4">Builder Home Site Inc</h4>
              <p>2014 - 2020</p>
              <h5 className="heading--4 text--color-secondary">UI Engineer</h5>
              <p>San José, Costa Rica</p>
            </div>
            <p className="experience__description">
              Worked closely with design and product teams to create smooth user
              experiences aligned with business goals. Skilled in modern CSS,
              responsive design, and accessibility. Led the UI Engineering team,
              developing strategies to deliver various projects and objectives.
            </p>
            <ul className="grid-col-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Adobe Creative Cloud</li>
              <li>Accesibility</li>
              <li>Responsive Development</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
