import { Fragment } from 'react/jsx-runtime';
import './navigation.scss';

export function Navigation() {
  return (
    <Fragment>
      <nav className="nav">
        <span className="nav__logo">
          N<span className="nav__logo-circle">.</span>
        </span>
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#experience">
              Exp.
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
