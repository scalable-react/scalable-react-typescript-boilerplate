import { AvatarStyle } from './styles';
import styled, { ThemeProps } from 'styled-components';

export { ThemeProps };
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
