import styled, { css } from 'styled-components';
import { Props } from './types';

function background(props: Props) {
  if (props.backgroundImage) {
    return css`
      background: ${(props: Props) => `url(${props.backgroundImage})`} center center / cover no-repeat;
    `;
  } else if (props.backgroundColor) {
    return css`
      background-color: ${(props: Props) => props.backgroundColor};
    `;
  }
}

function height(props: Props) {
  if (props.height) {
    const height = typeof props.height === 'string'
      ? props.height
      : `${props.height}px`;
    return css`
      height: ${height};
    `;
  }
  if (props.full) {
    return css`
      height: 100vh;
    `;
  }
  return css`
    height: auto;
    min-height: 350px;
  `;
}

export default styled.div`
  text-align: center;
  width: 100%;
  ${(props: Props) => background(props)}
  ${(props: Props) => height(props)}
`;
