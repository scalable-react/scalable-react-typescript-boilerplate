import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Notification from '../';
import { NotificationPropsRequired, NotificationPropsOther } from './__mocks__/notificationMocks.mock';

describe('<Notification /> default', () => {
  it('should render an Notification element with only the required props', () => {
    const wrapper = shallow(
      <Notification {...NotificationPropsRequired} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render an Notification element with other props', () => {
    const wrapper = shallow(
      <Notification {...NotificationPropsOther} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('The onClick prop should trigger with an onClick event', () => {
  let mockFunction;
  let notification;

  beforeEach(() => {
    mockFunction = jest.fn();
    notification = mount(
      <Notification {...NotificationPropsRequired} onClick={mockFunction} />,
    );
  });

  it('Notification requires onClick prop', () => {
    expect(notification.props().onClick).toBeDefined();
  });

  it('Notification rendered with Box - an HTML div element', () => {
    const renderedNotification = notification.find('div').first();
    expect(renderedNotification).toBeDefined();
  });

  it('Notification click calls mockFunction', () => {
    const renderedNotification = notification.find('div').first();
    renderedNotification.simulate('click');
    expect(mockFunction).toBeCalled();
  });
});
