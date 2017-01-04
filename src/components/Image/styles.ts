const styled = require('styled-components').default;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  max-height: ${(props) => props.size}px;
  display:block
`;
