import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import LoadingIndicator from '../';

describe('<LoadingIndicator /> default', () => {
  it('should render the element when isLoading is true', () => {
    const wrapper = shallow(
      <LoadingIndicator isLoading={true} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should return null when isLoading is false', () => {
    const wrapper = shallow(
      <LoadingIndicator isLoading={false} />,
    );
    expect(shallowToJson(wrapper)).toBeNull();
  });
});
