import { selectIsMobile, selectLogoText, selectNavLinks } from '../selectors';
import { State } from '../../../State';

const testState: State = {
  app: {
    isMobile: true,
    navLinks: [{
      text: 'demo2',
      url: 'www.google.com',
    }],
    logoText: null,
  },
  docs: null,
  todoApp: null,
  blogPost: null,
};

const testState2: State = {
  app: {
    isMobile: false,
    navLinks: [{
      text: 'demo',
      url: 'www.gmail.com',
    }, {
      text: 'demo3',
      url: 'www.rediff.com',
    }],
    logoText: 'demo',
  },
  docs: null,
  todoApp: null,
  blogPost: null,
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

  describe('app selectLogoText', () => {
    it('should return null', () => {
      expect(
        selectLogoText(testState))
        .toBe(null);
    });

    it('should return string', () => {
      expect(
        selectLogoText(testState2))
        .toBe('demo');
    });
  });

  describe('app selectNavLinks', () => {
    it('should return count', () => {
      expect(
        selectNavLinks(testState).length)
        .toBe(1);
    });

    it('should return count', () => {
      expect(
        selectNavLinks(testState2).length)
        .toBe(2);
    });

    it('should return string', () => {
      expect(
        selectNavLinks(testState)[0])
        .toEqual({
          text: 'demo2',
          url: 'www.google.com',
        });
    });

    it('should return string', () => {
      expect(
        selectNavLinks(testState2)[1])
        .toEqual({
          text: 'demo3',
          url: 'www.rediff.com',
        });
    });
  });

});
