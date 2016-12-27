import * as React from 'react';
const H1 = require('./styles').H1;

interface IProps extends React.Props<Header> {
  color: string,
};

class Header extends React.Component<IProps, any> {
  static defaultProps: IProps = {
    color: 'blue',
  }
  render() {
    return (
      <H1 color={this.props.color}>
        {this.props.children}
      </H1>
    );
  }
}

export default Header;
