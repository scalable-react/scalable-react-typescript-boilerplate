import * as React from 'react';
import { Props } from './types';
import Main from './main';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Main>
        {React.cloneElement(this.props.children)}
      </Main>
    );
  }
}
