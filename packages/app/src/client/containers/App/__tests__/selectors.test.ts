import { selectIsMobile } from '../selectors';
import { State } from '../../../State';

const testState: State = {
  app: {
    isMobile: true,
  },
  home: null,
};

const testState2: State = {
  app: {
    isMobile: false,
  },
  home: null,
};

describe('app selectors', () => {
  describe('app selectIsMobile', () => {
    it('should return true', () => {
      expect(
        selectIsMobile(testState))
        .toBe(true);
    });

    it('should return false', () => {
      expect(
        selectIsMobile(testState2))
        .toBe(false);
    });
  });
});
