import { Fragment, useState } from 'react';
import CalendlyModal from '../../components/CalendyModal/CalendyModal';
import MarqueeText from '../../components/MarqueeText/MarqueeText';
import './contact.scss';

export function Contact() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleButtonClick = () => {
    setShowCalendly(true);
  };

  const handleCloseModal = () => {
    setShowCalendly(false);
  };

  return (
    <Fragment>
      <section id="contact" className="section__container contact">
        <MarqueeText />
        <p className="contact__text">
          Feel free to connect with me on{' '}
          <a
            className="contact__text-link"
            href="https://www.linkedin.com/in/natalia-alp%C3%ADzar-4a640b96/"
          >
            LinkedIn
          </a>{' '}
          or schedule a meeting if you'd like to chat!
        </p>
        <button className="reveal-button" onClick={handleButtonClick}>
          Schedule a Meeting
        </button>
        <CalendlyModal
          isOpen={showCalendly}
          onRequestClose={handleCloseModal}
        />
      </section>
    </Fragment>
  );
}
