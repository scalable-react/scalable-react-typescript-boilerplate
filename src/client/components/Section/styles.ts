const styled = require('styled-components').default;
import { calculateFlexWrap, sizeToString, boxSizeToStyle } from '../Box/styles';

export default styled.section`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-wrap: ${({ wrap, reverse }) => calculateFlexWrap(wrap, reverse)};
  padding: ${({ pad }) => sizeToString(pad)};
  margin: ${({ margin }) => sizeToString(margin)};
  width: ${({ size }) => boxSizeToStyle(size).width};
  height: ${({ size }) => boxSizeToStyle(size).height};
  flex-basis: auto;
`;
