import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import DocsContainer from '../';
import State from '../state';

import mockStore from '../../../test/mockstore';

const testState: State = {
  error: null,
  isLoading: false,
  markdownContent: '',
};

describe('DocsContainer ', () => {
  let store: Store<State>;
  beforeEach(() => {
    store = mockStore(testState);
  });

  it('should render with default props', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DocsContainer/>
      </Provider>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
