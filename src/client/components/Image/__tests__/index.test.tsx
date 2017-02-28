import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Image from '../';
import { MockImageProps } from './__mocks__/imageMocks.mock';

describe('<Button /> default', () => {
  it('should render a plain button with default props and required props (src, alt)', () => {
    const wrapper = shallow(
      <Image alt="alt text" src="src string" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a plain button with other props', () => {
    const wrapper = shallow(
      <Image {...MockImageProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
