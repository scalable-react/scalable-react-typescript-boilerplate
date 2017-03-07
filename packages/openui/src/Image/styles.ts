import remStringFromPx from '../utils';
import { Props } from './types';
const styled = require('styled-components').default;
const { css } = require('styled-components');

const imageSizeMap = {
  thumb: 50,
  xxsmall: 100,
  xsmall: 200,
  small: 300,
  medium: 400,
  large: 500,
  xlarge: 600,
  full: 1200,
};

export const imageCss = ({ size }: Props) => {
  const sizeWithDefault = size || 'small';
  const px = imageSizeMap[sizeWithDefault];
  const rem = remStringFromPx(px);
  if (sizeWithDefault === 'full') {
    return css`
      width: 100vw;
      height: auto;
    `;
  }
  if (sizeWithDefault === 'thumb') {
    return css`
      width: ${rem};
      height: ${rem};
      flex: 0 0 auto;
      object-fit: cover;
    `;
  }
  return css`
    max-width: 100%;
    height: auto;
    min-height: ${rem};
    max-height: ${rem};
    display: block;
  `;
};

export const Img = styled.img`
  ${(props) => imageCss(props)}
`;
