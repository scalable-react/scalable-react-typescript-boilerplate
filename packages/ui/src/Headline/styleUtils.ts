import { HeadlineSize, SizeMap } from './index';
import remStringFromPX from '../utils';

const sizeMap: SizeMap = {
  small: 30,
  medium: 48,
  large: 60,
  xlarge: 72,
};

export default function calculateSize(size: HeadlineSize): string {
  return remStringFromPX(sizeMap[size]);
};
