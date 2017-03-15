import { AvatarStyle } from './styles';
import styled from 'styled-components';

export type ImageSize = 'thumb' | 'small' | 'medium' | 'large';
export interface Props {
  src: string;
  name?: string;
  size?: ImageSize;
}

const Avatar = styled.div`
${AvatarStyle}
`;

export default Avatar;
