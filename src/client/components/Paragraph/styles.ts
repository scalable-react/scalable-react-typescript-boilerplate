import { css } from 'styled-components';
import { Margin, ParagraphProps } from './index';
import calculateSize, { calculateMargin } from './styleUtils';

const defaultProps: ParagraphProps = {
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
  text-align: ${(props: ParagraphProps) => props.textAlign || defaultProps.textAlign};
  color: ${(props) => props.color || defaultProps.color};
  ${(props: ParagraphProps) => marginCss(props.margin || defaultProps.margin)};
  font-size: ${(props: ParagraphProps) => calculateSize(props.paragraphSize || defaultProps.paragraphSize)};
`;

export default style;
