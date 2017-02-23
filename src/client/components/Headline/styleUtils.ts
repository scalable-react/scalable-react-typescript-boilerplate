import { HeadlineSize, SizeMap } from './types';
import remStringFromPX from 'utils/remStringFromPX';

const sizeMap: SizeMap = {
  small: 30,
  medium: 48,
  large: 60,
  xlarge: 72,
};

export default function calculateSize(size: HeadlineSize): string {
  return remStringFromPX(sizeMap[size]);
};
