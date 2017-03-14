import { css } from 'styled-components';
import {PicProps} from './index';

export const PicStyle = css`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-size: contain;
  background-image: url(${(props: PicProps) => props.url});
`;
