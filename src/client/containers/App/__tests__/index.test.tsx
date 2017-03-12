import * as React from 'react';
import Container from '../';
import State from '../State';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
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
  let store: any;
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
