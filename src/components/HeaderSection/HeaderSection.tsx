import { Fragment } from 'react/jsx-runtime';
import { HeaderSectionProps } from './HeaderSection.types';
import './headersection.scss';

export function HeaderSection({
  title,
  textAlignment = 'left',
}: HeaderSectionProps) {
  const alignmentClass = textAlignment ? `heading--${textAlignment}` : '';
  return (
    <Fragment>
      <div className={`heading ${alignmentClass}`}>
        <div className="heading__line"></div>
        <h3 className="heading__headline-3">
          {title}
          <span className="text--big-4 text--color-secondary">.</span>
        </h3>
      </div>
    </Fragment>
  );
}
