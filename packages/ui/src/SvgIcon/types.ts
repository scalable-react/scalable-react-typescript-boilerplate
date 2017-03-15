import * as React from 'react';
import SvgIcon from './';

export interface SvgProps extends React.SVGProps {
  viewBox?: string;
}

export type SvgIconProps = SvgProps & React.HTMLProps<typeof SvgIcon>;
