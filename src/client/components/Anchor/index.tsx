import * as React from 'react';
import { withRouter } from 'react-router';
const AnchorComponent = require('./styles').AnchorComponent;

interface AnchorProps extends React.Props<Anchor> {
  path?: string;
  href?: string;
  label?: string;
  color?: string;
  method?: 'push' | 'replace';
  router?: {
    push: Function,
    replace: Function,
    createPath: Function,
  }
}

class Anchor extends React.Component<AnchorProps, undefined> {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  public static defaultProps = {
    color: '#007acc',
    method: 'push',
  };
  private handleClick(e: Event): void {
    const { method, path, router } = this.props;
    if (path) {
      e.preventDefault();
      if (method === 'push') {
        router.push(path);
      } else if (method === 'replace') {
        router.replace(path);
      }
    }
  }
  public render() {
    const {
      label,
      children,
      color,
      href,
    } = this.props;

    return (
      <AnchorComponent href={href} color={color} onClick={this.handleClick}>
        {label || children}
      </AnchorComponent>
    );
  }
}

export default withRouter(Anchor);
