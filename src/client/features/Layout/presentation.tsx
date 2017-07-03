import * as React from 'react';
import { Props } from './types';
import Main from './main';

export default function LayoutPresentation({ children }: Props): JSX.Element {
  return (
    <Main>
      {React.cloneElement(children)}
    </Main>
  );
}
