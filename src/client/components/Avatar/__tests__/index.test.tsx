import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Avatar from '../';
import props from './__mocks__/avatarMocks.mock';

describe('<Avatar {...props} />', () => {
    it('should render with proper props', () => {
        const wrapper = shallow(
            <Avatar {...props} />,
        );
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
