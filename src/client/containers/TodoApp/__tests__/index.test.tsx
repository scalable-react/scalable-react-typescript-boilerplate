import MockProvider, { getMockStore } from 'redux-mock-provider';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import * as React from 'react';
import { initialState } from '../state';
import TodoAppContainer from '../';
import TodoAppPresentation from '../presentation';
import props from './__mocks__/presentation.mock';

const store = getMockStore({
  key: 'todoApp',
  state: initialState,
});

describe('<TodoApp /> container', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <MockProvider store={store}>
        <TodoAppContainer />
      </MockProvider>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('<TodoAppPresentation />', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <TodoAppPresentation {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
