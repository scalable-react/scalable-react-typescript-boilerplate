import * as React from 'react';
const AnchorComponent = require('./styles').AnchorComponent;

interface IProps extends React.Props<Anchor> {
  href?: string;
  label?: string;
  color?: string;
};

class Anchor extends React.Component<IProps, any> {
  public static defaultProps = {
    color: '#007acc',
  };
  public render() {
    const {
      label,
      children,
      href,
      color,
    } = this.props;
    return (
      <AnchorComponent color={color} href={href}>
        {label || children}
      </AnchorComponent>
    );
  }
}

export default Anchor;
