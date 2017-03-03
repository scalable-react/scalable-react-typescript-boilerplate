import remStringFromPx from '../utils';
import { Props } from './types';
import styled, { css } from 'styled-components';

const imageSizeMap = {
  thumb: 50,
  xxsmall: 100,
  xsmall: 200,
  small: 300,
  medium: 400,
  large: 500,
  xlarge: 600,
};

export const imageCss = ({ size }: Props) => {
  const imageSize = size || 'small';
  const rem = remStringFromPx(imageSize);
  if (props.size === 'thumb') {
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
    display:block
  `;
};

export const Img = styled.img`
  ${(props) => imageCss(props)}
`;
