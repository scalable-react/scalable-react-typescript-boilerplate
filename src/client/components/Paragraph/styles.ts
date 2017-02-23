import { Margin } from './types';
import calculateSize, { calculateMargin } from './styleUtils';
const styled = require('styled-components').default;
const { css } = require('styled-components');

export function marginCss(margin: Margin) {
  return css`
    margin-top: ${calculateMargin(margin)};
    margin-bottom: ${calculateMargin(margin)};
  `;
};

export default styled.p`
  max-width: 630px;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => marginCss(props.margin)};
  font-size: ${(props) => calculateSize(props.size)};
`;
