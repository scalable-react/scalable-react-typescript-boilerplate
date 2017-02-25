import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Article from '../';
import props from './__mocks__/articleMocks.mock';

describe('<Article />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Article />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with default props and children', () => {
    const wrapper = shallow(
      <Article>
        👶👶👶
      </Article>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with different props', () => {
    const wrapper = shallow(
      <Article {...props}>
        👶👶👶
      </Article>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with content', () => {
    const wrapper = shallow(
      <Article {...props} content="# Awesome" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
