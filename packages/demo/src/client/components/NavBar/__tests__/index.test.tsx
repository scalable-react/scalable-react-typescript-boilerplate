import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import { navbarProps } from './__mocks__/navBarMocks.mock';
import NavBar from '../';

describe('<NavBar /> default', () => {
  it('should render NavBar with links and text', () => {
    const wrapper = shallow(
      <NavBar {...navbarProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
