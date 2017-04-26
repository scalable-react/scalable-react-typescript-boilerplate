import * as React from 'react';
import { ThemedCssFunction } from 'styled-components';
import Animation from './animation';
import { AnimationType } from './types';

export interface Props {
  type?: AnimationType;
  isVisible: boolean;
  children?: JSX.Element;
  duration?: number;
  delay?: number;
  css?: ThemedCssFunction<{}>;
}

export type HOC = (props: Props) => JSX.Element;
const WithAnimation: HOC = ({
  duration = 1000,
  type = 'fadeIn',
  children,
  delay = 0,
  ...props,
}) => (
  <Animation delay={delay} type={type} duration={duration} {...props}>
    {children}
  </Animation>
);

export default WithAnimation;
