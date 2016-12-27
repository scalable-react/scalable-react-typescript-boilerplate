import * as React from 'react';
const FooterComponent = require('./styles').FooterComponent;

interface IProps extends React.Props<Footer> {
  color: string,
};

class Footer extends React.Component<any, any> {
  static defaultProps: IProps = {
    color: '#0a0a0a',
  }
  render() {
    return (
      <FooterComponent color={this.props.color}>
        {this.props.children}
      </FooterComponent>
    );
  }
}

export default Footer;
