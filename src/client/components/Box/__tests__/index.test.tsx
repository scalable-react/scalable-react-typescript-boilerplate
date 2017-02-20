import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Box from '../';
import props from './__mocks__/boxMocks.mock';

describe('<Box />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Box>
        <div />
      </Box>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with different props', () => {
    const wrapper = shallow(
      <Box {...props}>
        <div />
      </Box>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
