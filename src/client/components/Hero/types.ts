import * as React from 'react';
import Hero from './';

export interface HeroProps extends React.Props<typeof Hero> {
  color?: string;
}
