import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Headline from '../';
import props from './__mocks__/headlineProps.mock';

describe('<Headline />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Headline>
        Headline
      </Headline>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with different props', () => {
    const wrapper = shallow(
      <Headline {...props}>
        Headline
      </Headline>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
