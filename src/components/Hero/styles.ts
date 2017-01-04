const styled = require('styled-components').default;

export const HeroDiv = styled.div`
  background: ${(props) => props.color};
  min-height: 350px;
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;
