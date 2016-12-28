import * as React from 'react';
const P = require('./styles').P;

interface IProps extends React.Props<Header> {
  color?: string;
  textAlign?: string;
  fontSize?: number;
};

class Header extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  };
  public render() {
    return (
      <P
        fontSize={this.props.fontSize}
        color={this.props.color}
        textAlign={this.props.textAlign}
      >
        {this.props.children}
      </P>
    );
  }
}

export default Header;
