import remStringFromPx from '../utils';
import map from './maps';
import { Props } from './types';
import defaultUrl from './default';
const styled = require('styled-components').default;
const { css } = require('styled-components');

const propsToSize = ({ size }: Props) => {
  const imageSize = size || 'medium';
  const px = map[imageSize];
  const rem = remStringFromPx(px);
  return css`
    width: ${rem};
    min-height: ${rem};
  `;
};

export default styled.div`
  background: url(${({ src }) => src || defaultUrl});
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
