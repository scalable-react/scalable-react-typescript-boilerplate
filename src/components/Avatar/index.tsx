import * as React from 'react';
const { AvatarContainer, AvatarDiv, AvatarName } = require('./styles').AvatarDiv;

interface IProps extends React.Props<Avatar> {
  avatarUrl: string;
  name?: string;
}

class Avatar extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    avatarUrl: 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png',
    name: 'Contributor',
  };
  public render() {
    const {
      avatarUrl,
      name
    } = this.props;
    return (


        <AvatarDiv avatarUrl={avatarUrl} />

    );
  }
}

export default Avatar;
