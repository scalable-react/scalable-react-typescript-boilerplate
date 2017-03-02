const styled = require('styled-components').default;
const { css } = require('styled-components');
import {
  calculateFlexWrap,
  calculateFullStyle,
  sizeToString,
  boxSizeToStyle,
} from './styleUtils';

export const BoxStyles = css`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap, reverse }) => calculateFlexWrap(flexWrap, reverse)};
  padding: ${({ pad }) => sizeToString(pad)};
  margin: ${({ margin }) => sizeToString(margin)};
  max-width: ${({ boxSize }) => boxSizeToStyle(boxSize).width};
  height: ${({ boxSize }) => boxSizeToStyle(boxSize).height};
  flex-basis: auto;
  min-height: ${({ full }) => calculateFullStyle(full, 'vh')};
  min-width: ${({ full }) => calculateFullStyle(full, 'vw')};
  cursor: ${({ selectable }) => selectable ? 'pointer' : 'inherit'};
`;

export default styled.div`
  ${BoxStyles}
`;
