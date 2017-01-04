const styled = require('styled-components').default;

export const HeadlineStyled = styled.h1`
  text-align: center;
  font-size: 48px;
  margin: 60px;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
`;
