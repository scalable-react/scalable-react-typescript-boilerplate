import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Hero from '../';
import { heroProps } from './__mocks__/heroMocks.mock';

describe('<Hero /> rendering behavior', () => {
  it('should render the Hero component with default props', () => {
    const wrapper = shallow(
      <Hero>
        Some content
      </Hero>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with other props', () => {
    const wrapper = shallow(
      <Hero {...heroProps}>
        Some content
      </Hero>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with the provided prop values', () => {
    const wrapper = shallow(
      <Hero {...heroProps}>
        Some content
      </Hero>,
    );
    expect(shallowToJson(wrapper).props.backgroundColor).toEqual(heroProps.backgroundColor);
  });
});
