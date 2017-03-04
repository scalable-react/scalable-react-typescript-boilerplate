import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Avatar from '../';
import props from './__mocks__/avatarMocks.mock';

describe('<Avatar {...props} />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Avatar {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with thumb size', () => {
    const wrapper = shallow(
      <Avatar {...props} size="thumb" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with small size', () => {
    const wrapper = shallow(
      <Avatar {...props} size="small" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with medium size', () => {
    const wrapper = shallow(
      <Avatar {...props} size="medium" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with large size', () => {
    const wrapper = shallow(
      <Avatar {...props} size="large" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
