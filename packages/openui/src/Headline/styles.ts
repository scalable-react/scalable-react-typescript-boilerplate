import { marginCss } from '../Paragraph/styles';
import calculateSize from './styleUtils';
import styled from 'styled-components';
import { Props } from './types';

export const HeadlineStyled = styled.h1`
  text-align: center;
  font-size: ${(props: Props) => calculateSize(props.fontSize)};
  text-align: ${(props: Props) => props.textAlign};
  color: ${(props: Props) => props.color};
  font-weight: ${(props: Props) => props.fontWeight};
  ${(props: Props) => marginCss(props.margin)};
`;
