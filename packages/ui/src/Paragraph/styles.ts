import { css } from 'styled-components';
import { Margin, Props } from './types';
import calculateSize, { calculateMargin } from './styleUtils';

const defaultProps: Props = {
  color: '#fff',
  textAlign: 'center',
  paragraphSize: 'medium',
  margin: 'medium',
};

export function marginCss(margin: Margin) {
  return css`
    margin-top: ${calculateMargin(margin)};
    margin-bottom: ${calculateMargin(margin)};
  `;
};

export const style = css`
  max-width: 630px;
  text-align: ${(props: Props) => props.textAlign || defaultProps.textAlign};
  color: ${(props: Props) => props.color || defaultProps.color};
  ${(props: Props) => marginCss(props.margin || defaultProps.margin)};
  font-size: ${(props: Props) => calculateSize(props.paragraphSize || defaultProps.paragraphSize)};
`;

export default style;
