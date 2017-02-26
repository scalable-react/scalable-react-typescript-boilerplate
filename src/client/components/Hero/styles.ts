const styled = require('styled-components').default;

export const HeroDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: 350px;
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;
