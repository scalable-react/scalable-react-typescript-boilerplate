import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Anchor from '../';
import pathProps, { hrefProps } from './__mocks__/anchorMocks.mock';

describe('<Anchor />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Anchor />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render path props', () => {
    const wrapper = shallow(
      <Anchor {...pathProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render href props', () => {
    const wrapper = shallow(
      <Anchor {...hrefProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with children', () => {
    const wrapper = shallow(
      <Anchor path="/about">
        About 👶
      </Anchor>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
