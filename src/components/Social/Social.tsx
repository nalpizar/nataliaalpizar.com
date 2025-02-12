import { Fragment } from 'react/jsx-runtime';
import './social.scss';
import { ShowVertical } from '../utils/ShowVertical';

export function Social() {
  return (
    <Fragment>
      <div className="social">
        <ul className="social__list">
          <ShowVertical>
            <li className="social__list-item">
              <a href="" className="social__link">
                LinkedIn
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#184027"
                    fill-opacity=".75"
                  />
                  <g clip-path="url(#a)">
                    <path
                      d="M8.064 6.556a1.556 1.556 0 1 1-3.11-.002 1.556 1.556 0 0 1 3.11.002Zm.047 2.706H5V19h3.111V9.262Zm4.916 0H9.93V19h3.065v-5.11c0-2.847 3.71-3.111 3.71 0V19h3.072v-6.168c0-4.799-5.491-4.62-6.782-2.263l.03-1.307Z"
                      fill="#FFF6ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(2.667 2.667)"
                        d="M0 0h18.667v18.667H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="social__list-item">
              <a href="" className="social__link">
                Github
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
                  />
                </svg>
              </a>
            </li>
            <li className="social__list-item">
              <a href="" className="social__link">
                Codepen
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#184027"
                    fill-opacity=".75"
                  />
                  <g clip-path="url(#a)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m18.872 13.39-1.827-1.223 1.827-1.223v2.445Zm-6.308 5.18v-3.406l3.167-2.118 2.557 1.71-5.724 3.815Zm-.73-4.675L9.25 12.167l2.583-1.729 2.584 1.729-2.584 1.728Zm-.731 4.676-5.724-3.816 2.557-1.71 3.167 2.119v3.407Zm-6.309-7.627 1.828 1.223-1.828 1.222v-2.445Zm6.309-5.182V9.17l-3.167 2.119-2.557-1.71 5.724-3.816Zm1.46 0 5.725 3.816-2.557 1.71-3.167-2.119V5.762Zm7.764 3.72-.006-.032a.69.69 0 0 0-.013-.061l-.011-.036a.941.941 0 0 0-.035-.089.368.368 0 0 0-.025-.048l-.021-.034a.511.511 0 0 0-.056-.076.671.671 0 0 0-.037-.04c-.01-.01-.018-.02-.028-.028a1.135 1.135 0 0 0-.042-.035l-.033-.025-.012-.009-7.77-5.18a.73.73 0 0 0-.81 0L3.659 8.97l-.012.01c-.012.007-.023.016-.033.024a.66.66 0 0 0-.042.035l-.029.028a.51.51 0 0 0-.061.071.659.659 0 0 0-.052.08.59.59 0 0 0-.025.047l-.016.036a.633.633 0 0 0-.019.053l-.011.036a.732.732 0 0 0-.013.06l-.006.033a.697.697 0 0 0-.007.095v5.18c0 .031.003.063.007.095l.006.031c.004.021.007.041.013.062l.011.035c.006.018.012.036.02.054l.015.035.025.049.021.033a.638.638 0 0 0 .121.144.679.679 0 0 0 .042.035c.01.009.021.017.033.025l.012.01 7.769 5.179a.73.73 0 0 0 .81 0l7.77-5.18.012-.009.033-.025a1.19 1.19 0 0 0 .042-.035l.029-.028a.65.65 0 0 0 .092-.116l.02-.033a.514.514 0 0 0 .026-.05l.016-.034.019-.054.011-.035c.006-.02.01-.04.013-.062l.006-.03a.713.713 0 0 0 .006-.096v-5.18a.69.69 0 0 0-.006-.095Z"
                      fill="#FFF6ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(3.333 3.667)"
                        d="M0 0h17v17H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ShowVertical>
        </ul>
      </div>
    </Fragment>
  );
}
