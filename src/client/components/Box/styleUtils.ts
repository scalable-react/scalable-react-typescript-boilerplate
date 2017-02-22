import { Size, ISizeObject, BoxSize, IBoxSize, Full, WrapOption, ISizeStyle } from './types';
import { SIZE_MAP, BOX_SIZE_MAP } from './maps';

export function calculateFlexWrap(wrap?: boolean, reverse?: boolean): WrapOption {
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
    returnVal = `${SIZE_MAP[vertical]}px ${SIZE_MAP[horizontal]}px`;
  } else {
    returnVal = `0px`;
  }
  return returnVal;
}

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
