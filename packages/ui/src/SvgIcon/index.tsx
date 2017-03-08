import * as React from 'react';
import { SvgIconProps } from './types';

export default function SvgIcon({
  children,
  viewBox,
  ...rest,
}: SvgIconProps): JSX.Element {
  const viewBoxProps = viewBox || '0 0 24 24';
  return (
    <svg
      {...rest}
      viewBox={viewBoxProps}
    >
      {children}
    </svg>
  );
}
