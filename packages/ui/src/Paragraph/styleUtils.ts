import { ParagraphSize, SizeMap, Margin, MarginSizeMap } from './types';
import remStringFromPX from '../utils';

const sizeMap: SizeMap = {
  small: 14,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const marginSizeMap: MarginSizeMap = {
  none: 0,
  small: 12,
  medium: 24,
  large: 48,
};

export function calculateMargin(margin: Margin): string {
  return remStringFromPX(marginSizeMap[margin]);
};

export default function calculateSize(size: ParagraphSize): string {
  return remStringFromPX(sizeMap[size]);
};
