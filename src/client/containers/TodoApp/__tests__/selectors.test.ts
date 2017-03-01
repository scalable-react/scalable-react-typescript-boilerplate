import state from './__mocks__/selectors.mock';
import { initialState as globalState } from '../../../state';
import { selectTodos, selectInput } from '../selectors';

let mockState;
describe('todoApp selectors', () => {
  beforeEach(() => {
    mockState = {
      ...globalState,
      todoApp: state.todoApp,
    };
  });
  describe('select todos', () => {
    it('should select an empty array', () => {
      expect(
        selectTodos(globalState),
      ).toEqual([]);
    });
    it('should select two todos', () => {
      expect(
        selectTodos(mockState),
      ).toEqual(state.todoApp.todos);
    });
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
      ).toEqual(state.todoApp.input);
    });
  });
});
