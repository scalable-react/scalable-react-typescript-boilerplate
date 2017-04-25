import styled, { css } from 'styled-components';
import { Props } from './types';

function styles(props: Props) {
  const opacity = props.isVisible ? 1.0 : 0.0;
  const transform = props.isVisible ? 0 : 20;
  switch (props.type) {
  case 'fadeIn':
    return css`
      opacity: ${opacity};
    `;
  case 'fadeInUp':
    return css`
      opacity: ${opacity};
      transform: translateY(${transform}%);
      will-change: transform, opacity;
    `;
  default:
    return '';
  }
}

function transition(props: Props) {
  const duration = 600;
  return css`
    transition: transform ${duration / 2}ms ease, opacity ${duration}ms ease-out;
  `;
}

function delay({ delay }: Props) {
  return css`
    transition-delay: ${delay}ms;
  `;
}

export default styled.div`
  ${(props: Props) => styles(props)}
  ${(props: Props) => transition(props)}
  ${(props: Props) => delay(props)}
  ${(props: Props) => props.css}
`;
