const styled = require('styled-components').default;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: ${props => props.size}px;
`;
