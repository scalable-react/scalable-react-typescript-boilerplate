import * as React from 'react';
const AnchorComponent = require('./styles').AnchorComponent;

interface IProps extends React.Props<Anchor> {
  href?: string;
  label?: string;
};

class Anchor extends React.Component<IProps, any> {
  public render() {
    const {
      label,
      children,
      href,
    } = this.props;
    return (
      <AnchorComponent href={href}>
        {label || children}
      </AnchorComponent>
    );
  }
}

export default Anchor;
