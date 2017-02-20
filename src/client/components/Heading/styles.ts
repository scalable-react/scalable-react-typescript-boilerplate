const styled = require('styled-components').default;

export const H1 = styled.h1`
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
`;
