import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Footer from '../';
import props from './__mocks__/footerMocks.mock';

describe('<Footer />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Footer>
        <div />
      </Footer>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with different props', () => {
    const wrapper = shallow(
      <Footer {...props}>
        <div />
      </Footer>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
