const styled = require('styled-components').default;

export const Circle = styled.circle`
  animation: color 1s alternate infinite ease-in-out;
`;

export default styled.svg`
  width: 48px;
  height: 48px;
  stroke-dasharray: 151px 151px;
  stroke-dashoffset: 0;
  transform: rotate(270deg);
  animation: draw 4s alternate infinite ease-in-out;
`;
