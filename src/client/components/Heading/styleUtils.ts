import { Tag } from './types';
import remStringFromPX from 'utils/remStringFromPX';

const sizeMap = {
  h1: 36,
  h2: 30,
  h3: 24,
  h4: 18,
  h5: 16,
};

export const calculateSize = (tag: Tag): string => remStringFromPX(sizeMap[tag]);
