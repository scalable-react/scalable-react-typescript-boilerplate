import * as React from 'react';
import { withRouter } from 'react-router';
import { AnchorComponent } from './styles';

const MethodTypePush = 'push';
const MethodTypeReplace = 'replace';
type Method = 'push' | 'replace';
export interface Props extends React.Props<Anchor> {
  path?: string;
  href?: string;
  label?: string;
  color?: string;
  method?: Method;
  router?: {
    push: Function,
    replace: Function,
    createPath: Function,
  }
}

class Anchor extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#007acc',
    method: MethodTypePush,
  };

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const { method, path, router } = this.props;
    if (path) {
      e.preventDefault();
      if (method === MethodTypePush) {
        router.push(path);
      } else if (method === MethodTypeReplace) {
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
