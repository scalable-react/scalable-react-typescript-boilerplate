import styled, {css} from 'styled-components';
import Props from './types';
import {
  calculateFlexWrap,
  calculateFullStyle,
  sizeToString,
  boxSizeToStyle,
} from './styleUtils';

export const BoxStyles = css`
  display: flex;
  background-color: ${({ backgroundColor }: Props) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }: Props) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }: Props) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }: Props) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap, reverse }: Props) => calculateFlexWrap(flexWrap, reverse)};
  padding: ${({ pad }: Props) => sizeToString(pad)};
  margin: ${({ margin }: Props) => sizeToString(margin)};
  width: ${({ boxSize }: Props) => boxSizeToStyle(boxSize).width};
  height: ${({ boxSize }: Props) => boxSizeToStyle(boxSize).height};
  flex-basis: auto;
  min-height: ${({ full }: Props) => calculateFullStyle(full, 'vh')};
  min-width: ${({ full }: Props) => calculateFullStyle(full, 'vw')};
  cursor: ${({ selectable }: Props) => selectable ? 'pointer' : 'inherit'};
`;

export default styled.div`
  ${BoxStyles}
`;
