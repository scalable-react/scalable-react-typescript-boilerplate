import { css } from 'styled-components';
import Props from './types';
import { BREAKPOINTS } from './maps';
import {
  Size,
  SizeObject,
  ResponsiveSize,
  Breakpoint,
  BoxSize,
  BoxSizeObject,
  Full,
  WrapOption,
  SizeStyle,
  Rem,
  Px,
} from './types';
import { SIZE_MAP, BOX_SIZE_MAP } from './maps';

const rootRem: number = 16;
const remFromPX = (px: Px): Rem => (px / rootRem);

export function calculateFlexWrap(wrap?: boolean, reverse?: boolean): WrapOption {
  if (wrap && reverse) {
    return 'wrap-reverse';
  } else if (wrap && !reverse) {
    return 'wrap';
  } else {
    return 'nowrap';
  }
}

export function sizeToString(size: Size | SizeObject, smallSize: boolean = false): string {
  let returnVal;
  if (typeof size === 'string') {
    returnVal = `${remFromPX(SIZE_MAP[size])}rem`;
  } else if (typeof size === 'object') {
    const horizontal = size.horizontal || 'none';
    const vertical = size.vertical || 'none';
    returnVal = `${remFromPX(SIZE_MAP[vertical])}rem ${remFromPX(SIZE_MAP[horizontal])}rem`;
  } else {
    returnVal = `0rem`;
  }
  return returnVal;
}

function stringBoxStyle(size: BoxSize): SizeStyle {
  if (size === 'full') {
    return {
      width: '100vw',
      height: '100vh',
    };
  } else {
    return {
      width: size ? `${remFromPX(BOX_SIZE_MAP[size])}rem` : '',
      height: size ? `${remFromPX(BOX_SIZE_MAP[size])}rem` : '',
    };
  }
}

function objectBoxStyle(size: BoxSizeObject): SizeStyle {
  let width = 'auto';
  let height = 'auto';
  if (size.vertical) {
    height = size.vertical === 'full'
      ? '100vh'
      : `${remFromPX(BOX_SIZE_MAP[size.vertical])}rem`;
  }
  if (size.horizontal) {
    width = size.horizontal === 'full'
      ? '100vw'
      : `${remFromPX(BOX_SIZE_MAP[size.horizontal])}rem`;
  }
  return {
    width,
    height,
  };
}

export function boxSizeToStyle(size: BoxSize | BoxSizeObject): SizeStyle {
  if (typeof size === 'string') {
    return stringBoxStyle(size);
  } else if (typeof size === 'object') {
    return objectBoxStyle(size);
  } else {
    return { width: 'auto', height: 'auto' };
  }
}

export function calculateFullStyle(full: Full, postFix: 'vw' | 'vh'): string {
  if (typeof full === 'object') {
    if (postFix === 'vw') {
      return full.horizontal ? `100${postFix}` : 'auto';
    } else {
      return full.vertical ? `100${postFix}` : 'auto';
    }
  } else if (typeof full === 'boolean') {
    return full ? `100${postFix}` : 'auto';
  }
  return 'auto';
}

export const breakPointCss = (breakPoint: Breakpoint) => {
  const selector = breakPoint === 'desktop' ? 'min-width' : 'max-width';
  return css`
    @media screen and (${selector}: ${BREAKPOINTS.phone}) {
      padding: ${({ pad }: Props) => sizeToString(pad)};
    }
  `;
};

export const breakPoints = (size: ResponsiveSize) => {
  if (size.desktop || size.mobile || size.tablet) {
    const css = Object.keys(size).map((key) =>
      breakPointCss(key as Breakpoint),
    ).join('; \n');
    return css;
  }
  return '';
};
