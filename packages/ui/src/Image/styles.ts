 import styled, { css } from 'styled-components';
import remStringFromPx from '../utils';
import { Props } from './index';

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

export const imageStyle = ({ imageSize }: Props) => {
  const sizeWithDefault = imageSize || 'small';
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
  ${(props: Props) => imageStyle(props)}
`;
