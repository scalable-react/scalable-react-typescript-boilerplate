import configureStore from 'redux-mock-store';
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

  beforeEach(() => {
    const store = mockStore(testState);     
  });

  it('should render with default props', () => {
    const wrapper = shallow(
      <DocsContainer/>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });  
});
