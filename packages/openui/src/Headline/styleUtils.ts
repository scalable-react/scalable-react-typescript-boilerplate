import remStringFromPX from '../utils';

export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

const sizeMap: SizeMap = {
  small: 30,
  medium: 48,
  large: 60,
  xlarge: 72,
};

export type HeadlineSize = 'small' | 'medium' | 'xlage' | 'xlarge';
export default function calculateSize(size: HeadlineSize): string {
  return remStringFromPX(sizeMap[size]);
};
