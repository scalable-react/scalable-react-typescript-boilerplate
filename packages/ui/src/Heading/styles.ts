import { css } from 'styled-components';
import { marginCss } from '../Paragraph/styles';
import { calculateSize } from './styleUtils';
import { HeadingProps } from './index';

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

export const HeaderStyle = css`
  font-size: ${(props: HeadingProps) => calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => marginCss(props.margin)};
`;
