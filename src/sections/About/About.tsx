import { Fragment } from 'react/jsx-runtime';
import './about.scss';
import { HeaderSection } from '../../components/HeaderSection/HeaderSection';
import { Social } from '../../components/Social/Social';

export function About() {
  return (
    <Fragment>
      <section id="about" className="section__container">
        <HeaderSection title="About" textAlignment="left" />
        <div>
          <div>
            <p>
              Hey there! I’m a Frontend Engineer with 10 years of experience in
              crafting beautiful, user-focused interfaces. Over the years, I’ve
              honed my skills in building intuitive, responsive, and visually
              engaging websites and applications.
            </p>
            <p>
              My journey has been centered around improving the user experience,
              with a focus on accessibility, performance, and responsiveness,
              ensuring that every user, regardless of their device or ability,
              has a seamless experience. I’m also experienced with A/B testing,
              helping teams iterate quickly and make data-driven decisions to
              improve overall UX. I’m always eager to learn new techniques and
              expand my tech stack, and I truly believe in the power of
              collaboration and feedback.
            </p>
            <p>
              I’m all about providing constructive, actionable insights—while
              being just as open to receiving them. For me, growth is about
              learning from others, sharing knowledge, and continuously pushing
              the boundaries of what's possible with code. I’m always eager to
              grow as a developer and team player.
            </p>
            <div>
              <p>Let’s connect!</p> ---&gt; <Social></Social>
            </div>
          </div>
          <div>
            <div>
              <h4>Use at work</h4>
            </div>
            <div>
              <h4>Use for fun</h4>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
