import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import DocsContainer from '../';
import State from '../State';

import mockStore from '../../../test/mockstore';

const testState: State = {
  error: null,
  isLoading: false,
  markdownContent: '',
};

describe('DocsContainer ', () => {
  let store: any;
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
