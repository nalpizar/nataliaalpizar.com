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
      <section
        id="contact"
        className="section__container contact text--color-primary"
      >
        <MarqueeText />
        <p className="contact__text">
          Schedule a meeting if you'd like to chat!
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
