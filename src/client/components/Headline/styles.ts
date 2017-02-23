import calculateSize from './styleUtils';
const styled = require('styled-components').default;

export const HeadlineStyled = styled.h1`
  text-align: center;
  font-size: ${(props) => calculateSize(props.size)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;
