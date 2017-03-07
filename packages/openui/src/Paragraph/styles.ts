import { Margin } from './types';
import calculateSize, { calculateMargin } from './styleUtils';
const styled = require('styled-components').default;
const { css } = require('styled-components');

const defaultProps = {
  color: '#fff',
  textAlign: 'center',
  size: 'medium',
  margin: 'medium',
};

export function marginCss(margin: Margin) {
  return css`
    margin-top: ${calculateMargin(margin)};
    margin-bottom: ${calculateMargin(margin)};
  `;
};

export default styled.p`
  max-width: 630px;
  text-align: ${(props) => props.textAlign || defaultProps.textAlign};
  color: ${(props) => props.color || defaultProps.color};
  ${(props) => marginCss(props.margin || defaultProps.margin)};
  font-size: ${(props) => calculateSize(props.size || defaultProps.size)};
`;
