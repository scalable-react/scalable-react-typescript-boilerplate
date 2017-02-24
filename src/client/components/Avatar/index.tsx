import * as React from 'react';
const { AvatarContainer, AvatarDiv, AvatarName } = require('./styles');

interface AvatarProps extends React.Props<Avatar> {
  avatarUrl: string;
  name?: string;
}

class Avatar extends React.Component<AvatarProps, any> {
  public static defaultProps: AvatarProps = {
    avatarUrl: 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png',
    name: 'Contributor',
  };
  public render() {
    const {
      avatarUrl,
      name,
    } = this.props;
    return (
      <AvatarContainer>
        <AvatarDiv avatarUrl={avatarUrl} />
        <AvatarName>
          {name}
        </AvatarName>
      </AvatarContainer>
    );
  }
}

export default Avatar;
