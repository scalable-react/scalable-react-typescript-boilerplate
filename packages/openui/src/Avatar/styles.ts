import { css, InterpolationFunction, ThemeProps } from 'styled-components';
import remStringFromPx from '../utils';
import map from './maps';
import { Props } from './index';
import defaultUrl from './default';

const propsToSize = ({ size }: Props) => {
  const imageSize = size || 'medium';
  const px = map[imageSize];
  const rem = remStringFromPx(px);
  return css`
    width: ${rem};
    min-height: ${rem};
  `;
};

export { InterpolationFunction, ThemeProps };
export const AvatarStyle = css`
  background: url(${({ src }: Props) => src || defaultUrl});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  ${propsToSize}
`;
