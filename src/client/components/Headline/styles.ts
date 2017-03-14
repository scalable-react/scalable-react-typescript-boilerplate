import { marginCss } from '../Paragraph/styles';
import calculateSize from './styleUtils';
import {css} from 'styled-components';
import { HeadlineProps } from './index';

export const HeadlineStyle = css`
  text-align: center;
  font-size: ${(props: HeadlineProps) => calculateSize(props.size)};
  text-align: ${(props: HeadlineProps) => props.textAlign};
  color: ${(props: HeadlineProps) => props.color};
  font-weight: ${(props: HeadlineProps) => props.fontWeight};
  ${(props: HeadlineProps) => marginCss(props.margin)};
`;
