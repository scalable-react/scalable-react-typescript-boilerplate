import { Rem, Px, HeadlineSize, SizeMap } from './types';

const baseRem = 16;
const sizeMap: SizeMap = {
  small: 30,
  medium: 48,
  large: 60,
  xlarge: 72,
};

function pxToRem(px: Px): Rem {
  return px / baseRem;
};

export default function calculateSize(size: HeadlineSize): string {
  const remValue = pxToRem(sizeMap[size]);
  return `${remValue}rem`;
};
