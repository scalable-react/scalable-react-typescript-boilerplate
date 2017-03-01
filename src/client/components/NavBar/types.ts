import * as React from 'react';
import NavBar from './';

interface Navlink { url: string; text: string; }
export interface NavBarProps extends React.Props<typeof NavBar> {
  logoText: string;
  links: Navlink[];
}
