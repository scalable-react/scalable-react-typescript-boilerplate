import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Button from '../';
import { buttonProps, heroButtonProps } from './__mocks__/buttonMocks.mock';

describe('<Button /> default', () => {
  it('should render a plain button with default props', () => {
    const wrapper = shallow(
      <Button>
        Button Text
      </Button>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a plain button with other props', () => {
    const wrapper = shallow(
      <Button {...buttonProps}>
        Button Text
      </Button>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Button /> when a hero button', () => {
  it('should render a hero button with boolean true', () => {
    const wrapper = shallow(
      <Button isHero={true}>
        Button Text
      </Button>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render a hero button with other props', () => {
    const wrapper = shallow(
      <Button {...heroButtonProps}>
        Button Text
      </Button>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Plain button is not a hero button', () => {
  let button;

  beforeEach(() => {
    button = mount(
      <Button>
        Button Text
      </Button>,
    );
  });

  it('Button requires isHero prop', () => {
    expect(button.props().isHero).toBeDefined();
    expect(button.props().isHero).toEqual(false);
  });
});

describe('onClick event for plain button', () => {
  let mockFunction;
  let button;

  beforeEach(() => {
    mockFunction = jest.fn();
    button = mount(
      <Button onClick={mockFunction}>
        Button Text
      </Button>,
    );
  });

  it('Button requires onClick prop', () => {
    expect(button.props().onClick).toBeDefined();
  });

  it('Button renders button', () => {
    const renderedButton = button.find('button').first();
    expect(renderedButton).toBeDefined();
  });

  it('Button click calls mockFunction', () => {
    const renderedButton = button.find('button').first();
    renderedButton.simulate('click');
    expect(mockFunction).toBeCalled();
  });
});

describe('onClick event for hero button', () => {
  let mockFunction;
  let button;

  beforeEach(() => {
    mockFunction = jest.fn();
    button = mount(
      <Button isHero={true} onClick={mockFunction}>
        Button Text
      </Button>,
    );
  });

  it('Button requires onClick prop', () => {
    expect(button.props().onClick).toBeDefined();
  });

  it('Button renders button', () => {
    const renderedButton = button.find('button').first();
    expect(renderedButton).toBeDefined();
  });

  it('Button click calls mockFunction', () => {
    const renderedButton = button.find('button').first();
    renderedButton.simulate('click');
    expect(mockFunction).toBeCalled();
  });
});
