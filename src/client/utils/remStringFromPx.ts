type Px = number;
type Rem = number;

const rootRem: number = 16;
const calculateRem = (px: Px): Rem => (px / rootRem);
export default (px: Px): string => `${calculateRem(px)}rem`;
