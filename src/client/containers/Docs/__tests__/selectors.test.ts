import { selectIsLoading, selectError } from '../selectors';
import { State } from '../../../State';

const testError: string = 'some error';
const testMarkDown: string = '#Test Markdown';

const testState: State = {
  app: {},
  todoApp: null,
  blogPost: null,
  docs: {
    error: null,
    isLoading: false,
    markdownContent: null,
  },
};

const testState2: State = {
  app: {},
  todoApp: null,
  blogPost: null,
  docs: {
    error: testError,
    isLoading: true,
    markdownContent: testMarkDown,
  },
};

describe('docs selectors', () => {
  describe('docs selectIsLoading', () => {
    it('should return false', () => {
      expect(
        selectIsLoading(testState))
        .toBe(false);
    });

    it('should return true', () => {
      expect(
        selectIsLoading(testState2))
        .toBe(true);
    });
  });

  describe('docs selectError', () => {
    it('should return null', () => {
      expect(
        selectError(testState))
        .toBe(null);
    });

    it('should return string', () => {
      expect(
        selectIsLoading(testState2))
        .toBe(true);
    });
  });

  describe('docs selectMarkdownContent', () => {
    it('should return null', () => {
      expect(
        selectError(testState))
        .toBe(null);
    });

    it('should return string', () => {
      expect(
        selectIsLoading(testState2))
        .toBe(true);
    });
  });

});
