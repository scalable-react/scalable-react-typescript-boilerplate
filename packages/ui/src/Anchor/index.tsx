import * as React from 'react';
import { withRouter, InjectedRouter } from 'react-router';
import Component from './styles';

const MethodTypePush = 'push';
const MethodTypeReplace = 'replace';
type Method = 'push' | 'replace';
export interface Props extends React.Props<Anchor> {
  path?: string;
  plain?: boolean;
  href?: string;
  label?: string;
  color?: string;
  method?: Method;
  router?: InjectedRouter;
}

class Anchor extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
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
      plain,
    } = this.props;

    return (
      <Component
        plain={plain}
        href={href}
        color={color}
        onClick={this.handleClick}
      >
        {label || children}
      </Component>
    );
  }
}

export default withRouter(Anchor);
