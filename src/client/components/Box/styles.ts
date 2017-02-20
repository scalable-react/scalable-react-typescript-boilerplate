const styled = require('styled-components').default;
import { Size, ISizeObject, BoxSize, IBoxSize } from './types';

const SIZE_MAP = {
  none: 0,
  small: 12,
  medium: 24,
  large: 48,
};

const BOX_SIZE_MAP = {
  xxsmall: 48,
  xsmall: 96,
  small: 192,
  medium: 384,
  large: 576,
  xlarge: 720,
  xxlarge: 960,
};

export function calculateFlexWrap(wrap?: boolean, reverse?: boolean) {
  if (wrap && reverse) {
    return 'wrap-reverse';
  } else if (wrap && !reverse) {
    return 'wrap';
  } else {
    return 'nowrap';
  }
}

export function sizeToString(size: Size | ISizeObject): string {
  let returnVal;
  if (typeof size === 'string') {
    returnVal = `${SIZE_MAP[size]}px`;
  } else if (typeof size === 'object') {
    const horizontal = size.horizontal || 'none';
    const vertical = size.vertical || 'none';
    returnVal = `${SIZE_MAP[horizontal]}px ${SIZE_MAP[vertical]}px`;
  } else {
    returnVal = `0px`;
  }
  return returnVal;
}

interface ISizeStyle {
  height: string;
  width: string;
};

function stringBoxStyle(size: BoxSize): ISizeStyle {
  if (size === 'full') {
    return {
      width: '100vw',
      height: '100vh',
    };
  } else {
    return {
      width: size ? `${BOX_SIZE_MAP[size]}px` : '',
      height: size ? `${BOX_SIZE_MAP[size]}px` : '',
    };
  }
}

function objectBoxStyle(size: IBoxSize): ISizeStyle {
  let width = 'auto';
  let height = 'auto';
  if (size.vertical) {
    height = size.vertical === 'full'
      ? '100vh'
      : `${BOX_SIZE_MAP[size.vertical]}px`;
  }
  if (size.horizontal) {
    width = size.horizontal === 'full'
      ? '100vw'
      : `${BOX_SIZE_MAP[size.horizontal]}px`;
  }
  return {
    width,
    height,
  };
}

export function boxSizeToStyle(size: BoxSize | IBoxSize): ISizeStyle {
  if (typeof size === 'string') {
    return stringBoxStyle(size);
  } else if (typeof size === 'object') {
    return objectBoxStyle(size);
  } else {
    return { width: 'auto', height: 'auto' };
  }
}

export default styled.div`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-wrap: ${({ wrap, reverse }) => calculateFlexWrap(wrap, reverse)};
  padding: ${({ pad }) => sizeToString(pad)};
  margin: ${({ margin }) => sizeToString(margin)};
  width: ${({ size }) => boxSizeToStyle(size).width};
  height: ${({ size }) => boxSizeToStyle(size).height};
  flex-basis: auto;
`;
