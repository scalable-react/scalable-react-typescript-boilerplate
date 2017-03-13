import styled from 'styled-components';
import { PicProps } from './types';

export interface PicProps {
  url?: string;
}

export const Pic = styled.div`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-size: contain;
  background-image: url(${(props: PicProps) => props.url});
`;
