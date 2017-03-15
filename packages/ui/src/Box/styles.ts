import styled, {css} from 'styled-components';
import { BoxProps } from './types';
import {
  calculateFlexWrap,
  calculateFullStyle,
  sizeToString,
  boxSizeToStyle,
} from './styleUtils';

export const BoxStyles = css`
  display: flex;
  background-color: ${({ backgroundColor }: BoxProps) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }: BoxProps) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }: BoxProps) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap, reverse }) => calculateFlexWrap(flexWrap, reverse)};
  padding: ${({ pad }) => sizeToString(pad)};
  margin: ${({ margin }) => sizeToString(margin)};
  max-width: ${({ boxSize }) => boxSizeToStyle(boxSize).width};
  height: ${({ boxSize }) => boxSizeToStyle(boxSize).height};
  flex-basis: auto;
  min-height: ${({ full }: BoxProps) => calculateFullStyle(full, 'vh')};
  min-width: ${({ full }) => calculateFullStyle(full, 'vw')};
  cursor: ${({ selectable }) => selectable ? 'pointer' : 'inherit'};
`;

export default styled.div`
  ${BoxStyles}
`;
