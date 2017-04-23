import * as React from 'react';
import Container from '../';
import State from '../state';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import mockStore from 'test/mockstore';

const testState: State = {
  isMobile: true,
  logoText: 'logo',
  navLinks: [{
    text: 'demo',
    url: 'www.google.com',
  }, {
    text: 'demo2',
    url: 'www.gmail.com',
  }],
};

describe('DocsContainer ', () => {
  let store: Store<State>;
  beforeEach(() => {
    store = mockStore(testState);
  });

  it('should render with default props', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Container />
      </Provider>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
