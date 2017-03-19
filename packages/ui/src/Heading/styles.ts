import styled, { css } from 'styled-components';
import { marginCss } from '../Paragraph/styles';
import { calculateSize } from './styleUtils';
import { Props } from './types';

const truncateCss = (truncate: boolean) => {
  if (truncate) {
    return css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }
  return '';
};

const textTransformCss = (upcase: boolean) => {
  if (upcase) {
    return css`
      text-transform: uppercase;
    `;
  }
  return '';
};

const HeadingStyles = css`
  font-size: ${(props: Props) => calculateSize(props.tag)};
  text-align: ${(props: Props) => props.textAlign};
  color: ${(props: Props) => props.color};
  ${(props: Props) => truncateCss(props.truncate)};
  ${(props: Props) => textTransformCss(props.upcase)};
  ${(props: Props) => marginCss(props.margin)};
`;

export const H1 = styled.h1`
  ${HeadingStyles}
`;

export const H2 = styled.h2`
  ${HeadingStyles}
`;

export const H3 = styled.h3`
  ${HeadingStyles}
`;

export const H4 = styled.h4`
  ${HeadingStyles}
`;

export const H5 = styled.h5`
  ${HeadingStyles}
`;
