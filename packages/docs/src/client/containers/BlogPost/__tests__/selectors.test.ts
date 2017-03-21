import state from './__mocks__/blogPostSelectors.mock';
import { initialState as globalState } from '../../../state';
import { selectInput } from '../selectors';

let mockState;
describe('blogPost selectors', () => {
  beforeEach(() => {
    mockState = {
      ...globalState,
      blogPost: state.blogPost,
    };
  });
  describe('select input', () => {
    it('should select an empty string', () => {
      expect(
        selectInput(globalState),
      ).toEqual('');
    });
    it('should select input', () => {
      expect(
        selectInput(mockState),
      ).toEqual(state.blogPost.input);
    });
  });
});
