import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Comment from '../';
import { commentProps, commentPicProps } from './__mocks__/commentMocks.mock';

describe('<Comment /> default', () => {
  it('should render a plain comment with required props', () => {
    const wrapper = shallow(
      <Comment {...commentProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a plain comment with other props', () => {
    const wrapper = shallow(
      <Comment {...commentPicProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
