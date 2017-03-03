import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Image from '../';
import * as Props from './__mocks__/imageMocks.mock';

describe('<Image />', () => {
  it('should render a default image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImageProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a thumbnail image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsThumb} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a xxsmall image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsXXSmall} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a xsmall image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsXSmall} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a small image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsSmall} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a medium image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsMedium} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a large image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsLarge} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a xlarge image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsXLarge} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a full image', () => {
    const wrapper = shallow(
      <Image {...Props.MockImagePropsFull} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
