import styled from 'styled-components';
import {PicStyle} from './styles';

export interface PicProps {
  url?: string;
}

export const Pic = styled.div`
  ${PicStyle}
`;

export default Pic;
