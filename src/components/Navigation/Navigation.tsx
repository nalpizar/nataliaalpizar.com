import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ShowHorizontal } from '../utils/ShowHorizontal';
import { useActiveNavItem } from '../../hooks/useActiveNavItem';
import './navigation.scss';

export function Navigation() {
  const sectionIds = ['about', 'projects', 'experience', 'contact'];
  const { activeItem, handleItemClick } = useActiveNavItem(sectionIds);

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
            {sectionIds.map((id) => (
              <li
                key={id}
                className={`nav__list-item ${activeItem === id ? 'nav__list-item--active' : ''}`}
              >
                <Link
                  className="nav__link"
                  to={`/${id}`}
                  onClick={() => handleItemClick(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ShowHorizontal>
        </ul>
      </nav>
    </Fragment>
  );
}
