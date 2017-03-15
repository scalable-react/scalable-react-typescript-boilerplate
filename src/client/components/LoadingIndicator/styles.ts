import styled, { keyframes } from 'styled-components';

const draw = keyframes`
  0% {
    transform: rotate(-90deg);
    stroke-dashoffset: 151px;
  }

  100% {
    stroke-dashoffset: -131px
  }
`;

const color = keyframes`
  0% {
    stroke: #007acc;
  }

  100% {
    stroke: #293953;
  }
`;

export const Circle = styled.circle`
  animation: ${color} 1s alternate infinite ease-in-out;
`;

export default styled.svg`
  width: 48px;
  height: 48px;
  stroke-dasharray: 151px 151px;
  stroke-dashoffset: 0;
  transform: rotate(270deg);
  animation: ${draw} 4s alternate infinite ease-in-out;
`;
