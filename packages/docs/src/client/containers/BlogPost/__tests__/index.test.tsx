import MockProvider, { getMockStore } from 'redux-mock-provider';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import * as React from 'react';
import { initialState } from '../state';
import BlogPost from '../';
import BlogPostPresentation from '../presentation';
import props from './__mocks__/blogPostPresentation.mock';
import colors from '../../../theming';

const store = getMockStore({
  key: 'blogPost',
  state: initialState,
});

describe('<BlogPost /> container', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <MockProvider store={store}>
        <BlogPost />
      </MockProvider>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('<BlogPostPresentation />', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <BlogPostPresentation {...props} theme={colors} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
