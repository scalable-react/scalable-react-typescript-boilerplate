import Features from './';
import * as React from 'react';
import { ThemeColorMap } from '../../types';

export interface FeaturesProps extends React.Props<typeof Features> {
  theme?: ThemeColorMap;
}
