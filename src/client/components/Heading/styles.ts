import { marginCss } from '../Paragraph/styles';
import { calculateSize } from './styleUtils';
const styled = require('styled-components').default;
const { css } = require('styled-components');

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

export const H1 = styled.h1`
  font-size: ${(props) => calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => marginCss(props.margin)};
`;

export const H2 = styled.h2`
  font-size: ${(props) => calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => marginCss(props.margin)};
`;

export const H3 = styled.h3`
  font-size: ${(props) => calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => marginCss(props.margin)};
`;

export const H4 = styled.h4`
  font-size: ${(props) => calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => marginCss(props.margin)};
`;

export const H5 = styled.h5`
  font-size: ${(props) => calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => marginCss(props.margin)};
`;
