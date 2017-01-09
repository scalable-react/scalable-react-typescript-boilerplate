import * as React from 'react';
const AvatarDiv = require('./styles').AvatarDiv;

interface IProps extends React.Props<Avatar> {
  avatarUrl: string;
}

class Avatar extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    avatarUrl: 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png',
  };
  public render() {
    return (
      <AvatarDiv avatarUrl={this.props.avatarUrl}>
        {this.props.children}
      </AvatarDiv>
    );
  }
}
