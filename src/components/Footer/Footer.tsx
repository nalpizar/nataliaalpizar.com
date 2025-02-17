import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; 2025 Natalia Alpizar Meza. All rights reserved.
      </p>
      <p className="footer__text">
        Let's connect! Reach out via{' '}
        <a className="footer__text-link" href="mailto:natalpizarm@gmail.com">
          email
        </a>
        , or{' '}
        <a
          className="footer__text-link"
          href="https://www.linkedin.com/in/nataliaalpizar"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p className="footer__text">
        Look how I made my implementation here:{' '}
        <a
          className="footer__text-link"
          href="https://github.com/nalpizar/nataliaalpizar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>
    </footer>
  );
};

export default Footer;
