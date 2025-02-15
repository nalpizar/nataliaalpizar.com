import { Fragment } from 'react/jsx-runtime';
import { HeaderSection } from '../../components/HeaderSection/HeaderSection';
// import { Reveal } from '../../components/utils/Reveal';
import './projects.scss';
import projectImage from '../../assets/project-1.png';
import projectImage2 from '../../assets/project-2.png';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/utils/Reveal';

export function Projects() {
  return (
    <Fragment>
      <section id="projects" className="section__container">
        <HeaderSection title="Projects" textAlignment="right" />
        <div className="projects__container">
          <div className="project">
            <div className="project__image">
              <motion.img
                src={projectImage2}
                alt="Project-2 image"
                className="project__image-img"
                style={{ width: '85%' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            <div className="project__description">
              <Reveal width="100%">
                <div className="project__description-title">
                  <h4 className="project__title-text">New Home Source</h4>
                  <div className="project__title-title-line"></div>
                  <a
                    target="_blank"
                    className="project__description-link"
                    rel="nofollow"
                    href="https://www.newhomesource.com/"
                  >
                    <svg
                      stroke="#184027"
                      fill="#184027"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                    </svg>
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div className="project__description-tech">
                  Redux - JavaScript - SASS - Storybook - Design Tokens
                </div>
              </Reveal>
              <Reveal>
                <p className="projects__description-text">
                  This is one of the key projects I worked on during my 10 years
                  in frontend development. Before transitioning, I was part of
                  the squad handling the rebrand, which involved integrating a
                  new design system using tools like Storybook, Design Tokens,
                  and Chromatic to improve UI consistency and streamline
                  component development.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="project">
            <div className="project__image">
              <motion.img
                src={projectImage}
                alt="Project-1 image"
                className="project__image-img"
                style={{ width: '85%' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            <div className="project__description">
              <Reveal width="100%">
                <div className="project__description-title">
                  <h4 className="project__title-text">
                    Carbon Emissions Visualization
                  </h4>
                  <div className="project__title-title-line"></div>
                  <a
                    target="_blank"
                    className="project__description-link"
                    rel="nofollow"
                    href="https://github.com/nalpizar/CarbonEmissionsVisualizer"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.373 0 0 5.507 0 12.306c0 5.438 3.44 10.045 8.207 11.674.6.112.82-.268.82-.595 0-.295-.01-1.066-.016-2.095-3.338.745-4.045-1.65-4.045-1.65-.546-1.42-1.334-1.8-1.334-1.8-1.087-.766.08-.75.08-.75 1.206.086 1.838 1.27 1.838 1.27 1.071 1.88 2.807 1.34 3.493 1.023.107-.793.418-1.34.76-1.645-2.662-.31-5.464-1.366-5.464-6.08 0-1.345.466-2.443 1.232-3.3-.123-.311-.535-1.565.118-3.258 0 0 1.007-.332 3.3 1.26a11.241 11.241 0 0 1 3.006-.413c1.018.005 2.046.139 3.005.412C17.293 4.77 18.295 5.1 18.295 5.1c.653 1.693.24 2.947.117 3.258.767.862 1.233 1.96 1.233 3.3 0 4.725-2.808 5.764-5.48 6.07.428.38.814 1.13.814 2.277 0 1.644-.016 2.973-.016 3.375 0 .327.214.712.825.59C20.566 22.345 24 17.737 24 12.305 24 5.507 18.627 0 12 0Z"
                        fill="#184027"
                        fill-opacity=".75"
                      ></path>
                    </svg>
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <div className="project__description-tech">
                  React - Recharts - TypeScript
                </div>
              </Reveal>
              <Reveal>
                <p className="projects__description-text">
                  This project visualizes carbon emissions data for Germany's
                  federal states using interactive graphs. It aims to provide
                  clear insights into the environmental impact of each state,
                  helping users understand and address climate change.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
