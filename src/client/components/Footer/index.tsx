import * as React from 'react';
const FooterComponent = require('./styles').FooterComponent;

interface FooterProps extends React.Props<Footer> {
  color: string;
};

class Footer extends React.Component<any, undefined> {
  public static defaultProps: FooterProps = {
    color: '#0a0a0a',
  };
  public render() {
    return (
      <FooterComponent color={this.props.color}>
        {this.props.children}
      </FooterComponent>
    );
  }
}

export default Footer;
