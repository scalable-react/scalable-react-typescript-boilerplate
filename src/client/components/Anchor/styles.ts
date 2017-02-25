const styled = require('styled-components').default;

export const AnchorComponent = styled.a`
  color: ${(props) => props.color};
  font-size: 1.1875rem;
  line-height: 24px;
  font-weight: 400;
`;
