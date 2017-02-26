import * as React from 'react';
import Hero from './';

export interface HeroProps extends React.Props<Hero> {
  backgroundColor?: string;
  children?: JSX.Element;
}
