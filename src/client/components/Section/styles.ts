const styled = require('styled-components').default;
import { calculateFlexWrap, sizeToString, boxSizeToStyle } from '../Box/styles';

export default styled.section`
  display: flex;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'column'};
  flex-wrap: ${({ wrap, reverse }) => calculateFlexWrap(wrap, reverse)};
  padding: ${({ pad }) => sizeToString(pad)};
  margin: ${({ margin }) => sizeToString(margin)};
  width: ${({ size }) => boxSizeToStyle(size).width};
  height: ${({ size }) => boxSizeToStyle(size).height};
  flex-basis: auto;
`;
