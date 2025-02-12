import { Fragment } from 'react';
import { ShowHorizontal } from '../utils/ShowHorizontal';
import { useActiveNavItem } from '../../hooks/useActiveNavItem';
import './navigation.scss';

export function Navigation() {
  const { activeItem, handleItemClick } = useActiveNavItem();
  return (
    <Fragment>
      <nav className="nav">
        <ShowHorizontal>
          <span className="nav__logo">
            N<span className="nav__logo-circle">.</span>
          </span>
        </ShowHorizontal>
        <ul className="nav__list">
          <ShowHorizontal>
            <li
              className={`nav__list-item ${activeItem === 'about' ? 'nav__list-item--active' : ''}`}
            >
              <a
                className="nav__link"
                href="#about"
                onClick={() => handleItemClick('about')}
              >
                About
              </a>
            </li>
            <li
              className={`nav__list-item ${activeItem === 'projects' ? 'nav__list-item--active' : ''}`}
            >
              <a
                className="nav__link"
                href="#projects"
                onClick={() => handleItemClick('projects')}
              >
                Projects
              </a>
            </li>
            <li
              className={`nav__list-item ${activeItem === 'experience' ? 'nav__list-item--active' : ''}`}
            >
              <a
                className="nav__link"
                href="#experience"
                onClick={() => handleItemClick('experience')}
              >
                Experience
              </a>
            </li>
            <li
              className={`nav__list-item ${activeItem === 'contact' ? 'nav__list-item--active' : ''}`}
            >
              <a
                className="nav__link"
                href="#contact"
                onClick={() => handleItemClick('contact')}
              >
                Contact
              </a>
            </li>
          </ShowHorizontal>
        </ul>
      </nav>
    </Fragment>
  );
}
