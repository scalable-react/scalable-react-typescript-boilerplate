import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import AddComment from '../';
import { addCommentProps } from './__mocks__/addCommentMocks.mock';

describe('<AddComment /> rendering', () => {
  it('should render with supplied props', () => {
    const wrapper = shallow(
      <AddComment {...addCommentProps} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('<AddComment /> onSubmit event testing', () => {
  let addCommentComponent;

  beforeEach(() => {
    addCommentComponent = mount(
      <AddComment {...addCommentProps} />,
    );
  });

  it('AddComment requires onSubmit prop', () => {
    expect(addCommentComponent.props().onSubmit).toBeDefined();
  });

  it('AddComment renders an anchor tag for OnClick event', () => {
    const renderedAnchorTag = addCommentComponent.find('a').first();
    expect(renderedAnchorTag).toBeDefined();
  });

  it('Clicking anchor tag calls onSubmit()', () => {
    const renderedAnchorTag = addCommentComponent.find('a').first();
    renderedAnchorTag.simulate('click');
    expect(addCommentProps.onSubmit).toBeCalled();
  });
});

describe('<AddComment /> onChange event testing', () => {
  let addCommentComponent;

  beforeEach(() => {
    addCommentComponent = mount(
     <AddComment {...addCommentProps} />,
    );
  });

  it('AddComment requires onChange prop', () => {
    expect(addCommentComponent.props().onChange).toBeDefined();
  });

  it('AddComment renders textarea for OnChange event', () => {
    const renderedTextArea = addCommentComponent.find('textarea').first();
    expect(renderedTextArea).toBeDefined();
  });

  it('Changing textarea triggers OnChange()', () => {
    const renderedTextArea = addCommentComponent.find('textarea').first();
    renderedTextArea.simulate('change');
    expect(addCommentProps.onChange).toBeCalled();
  });
});

describe('<AddComment /> onKeyUp event testing', () => {
  let addCommentComponent;

  beforeEach(() => {
    addCommentComponent = mount(
      <AddComment {...addCommentProps} />,
    );
  });

  it('AddComment requires onKeyUp prop', () => {
    expect(addCommentComponent.props().onKeyUp).toBeDefined();
  });

  it('AddComment renders textarea for OnKeyUp event', () => {
    const renderedTextArea = addCommentComponent.find('textarea').first();
    expect(renderedTextArea).toBeDefined();
  });

  it('KeyUp in textarea triggers OnKeyUp()', () => {
    const renderedTextArea = addCommentComponent.find('textarea').first();
    renderedTextArea.simulate('keyup');
    expect(addCommentProps.onKeyUp).toBeCalled();
  });
});
