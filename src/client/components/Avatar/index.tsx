import * as React from 'react';
import { AvatarProps } from './types';
import { AvatarContainer, AvatarDiv, AvatarName } from './styles';

export default function Avatar({
  avatarUrl,
  name,
}: AvatarProps): JSX.Element {
  const url = avatarUrl || 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png';
  const username = name || 'Contributor';
  return (
    <AvatarContainer>
      <AvatarDiv avatarUrl={url} />
      <AvatarName>
        {username}
      </AvatarName>
    </AvatarContainer>
  );
};
