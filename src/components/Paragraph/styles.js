const styled = require('styled-components').default;

export const P = styled.p`
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;
