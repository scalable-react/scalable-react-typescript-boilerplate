import * as React from 'react';
import { SvgProps } from './types';

export type Props = SvgProps & React.HTMLProps<typeof SvgIcon>;
export default function SvgIcon({
  children,
  viewBox,
  ...rest,
}: Props): JSX.Element {
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
