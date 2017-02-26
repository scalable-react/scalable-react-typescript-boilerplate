import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Heading from '../';
import { h2Props, h3Props, h4Props, h5Props } from './__mocks__/headingProps.mock';

describe('<Heading />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Heading>
        Test
      </Heading>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with h2 props', () => {
    const wrapper = shallow(
      <Heading {...h2Props}>
        Test
      </Heading>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with h3 props', () => {
    const wrapper = shallow(
      <Heading {...h3Props}>
        Test
      </Heading>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with h4 props', () => {
    const wrapper = shallow(
      <Heading {...h4Props}>
        Test
      </Heading>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with h5 props', () => {
    const wrapper = shallow(
      <Heading {...h5Props}>
        Test
      </Heading>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
