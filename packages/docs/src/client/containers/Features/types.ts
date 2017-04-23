import Features from './';
import * as React from 'react';
import { ThemeColorMap } from '../../types';

export interface Props extends React.Props<typeof Features> {
  theme?: ThemeColorMap;
}
