import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Error from '../';
import { ErrorPropsRequired, ErrorPropsOther } from './__mocks__/errorMocks.mock';

describe('<Error /> default', () => {
  it('should render an Error element with only the required props', () => {
    const wrapper = shallow(
      <Error {...ErrorPropsRequired} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render an Error element with other props', () => {
    const wrapper = shallow(
      <Error {...ErrorPropsOther} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('The onClick prop should trigger with an onClick event', () => {
  let mockFunction;
  let error;

  beforeEach(() => {
    mockFunction = jest.fn();
    error = mount(
      <Error {...ErrorPropsRequired} onClick={mockFunction} />,
    );
  });

  it('Error requires onClick prop', () => {
    expect(error.props().onClick).toBeDefined();
  });

  it('Error rendered with Box - an HTML div element', () => {
    const renderedError = error.find('div').first();
    expect(renderedError).toBeDefined();
  });

  it('Error click calls mockFunction', () => {
    const renderedError = error.find('div').first();
    renderedError.simulate('click');
    expect(mockFunction).toBeCalled();
  });
});
