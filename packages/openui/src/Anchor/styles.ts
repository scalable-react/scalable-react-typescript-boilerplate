import styled, { css } from 'styled-components';
import { Props } from './types';

const plainStyle = (plain: boolean) => {
  if (plain) {
    return css`
      cursor: pointer;
      line-height: inherit;
      text-decoration: inherit;
    `;
  }
  return css`
    text-decoration: underline;
    line-height: inherit;
    cursor: pointer;
  `;
};

const colorStyle = (color: string) => {
  if (color) {
    return css`
      color: ${color};
    `;
  }
  return null;
};

export default styled.a`
  font-size: 1.1875rem;
  line-height: 24px;
  font-weight: 400;
  ${(props: Props) => colorStyle(props.color)}
  ${(props: Props) => plainStyle(props.plain || false)}
`;
