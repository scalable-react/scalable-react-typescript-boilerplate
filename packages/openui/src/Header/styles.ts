import { css } from 'styled-components';
import { HeaderComponentProps, Props } from './types';

function translateStyle({ state, height }: HeaderComponentProps) {
  const translate = state === 'Pinned' ? 0 : -height;
  return css`
    transform: translate3d(0px, ${translate}px, 0px);
  `;
}

type OwnProps = Props & HeaderComponentProps;
export default function headerStyles() {
  return css`
    ${(props: OwnProps) => translateStyle(props)}
    padding: 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 8;
    width: 100%;
    will-change: transform;
    transition: transform 600ms ease, background-color 600ms ease, height 600ms ease;
    background-color: ${(props: OwnProps) => props.backgroundColor || 'rgba(245,245,245,.95)'};
  `;
}
