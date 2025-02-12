import { Fragment } from 'react/jsx-runtime';
import { HeaderSectionProps } from './HeaderSection.types';
import './headersection.scss';
import { Reveal } from '../utils/Reveal';

export function HeaderSection({
  title,
  textAlignment = 'left',
}: HeaderSectionProps) {
  const alignmentClass = textAlignment ? `heading--${textAlignment}` : '';
  return (
    <Fragment>
      <div className={`heading ${alignmentClass}`}>
        <div className="heading__line"></div>
        <Reveal>
          <h3 className="heading__headline-3">
            {title}
            <span className="text--big-4 text--color-secondary">.</span>
          </h3>
        </Reveal>
      </div>
    </Fragment>
  );
}
