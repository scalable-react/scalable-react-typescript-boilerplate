import { Rem, Px, Tag } from './types';

const rootRem: number = 16;
const remFromPX = (px: Px): Rem => (px / rootRem);

const sizeMap = {
  h1: 36,
  h2: 30,
  h3: 24,
  h4: 18,
  h5: 16,
};

export const calculateSize = (tag: Tag): string => `${remFromPX(sizeMap[tag])}rem`;
