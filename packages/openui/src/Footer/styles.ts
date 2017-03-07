const styled = require('styled-components').default;

export const FooterComponent = styled.footer`
  background: ${(props) => props.color};
  height: 300px;
  padding-top: 50px;
  text-align: center;
  width: 100%;
`;
