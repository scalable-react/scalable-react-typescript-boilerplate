import * as React from 'react';
import Avatar from './';

export interface AvatarProps extends React.Props<typeof Avatar> {
  avatarUrl: string;
  name?: string;
}
