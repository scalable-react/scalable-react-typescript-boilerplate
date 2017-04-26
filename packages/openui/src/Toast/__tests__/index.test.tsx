import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Toast from '../';
import { Status } from '../types';
import props from './__mocks__/toast.mock';

describe('<Toast />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Toast>
        Jello
      </Toast>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with different props', () => {
    const wrapper = shallow(
      <Toast {...props} status={props.status as Status}>
        Foobar
      </Toast>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
