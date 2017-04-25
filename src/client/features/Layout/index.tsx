import * as React from 'react';
import LayoutPresentation from './presentation';

export interface Props {
  children: JSX.Element;
}

class Layout extends React.Component<Props, undefined> {
  public render() {
    return (
      <LayoutPresentation {...this.props} />
    );
  }
}

export default Layout;
