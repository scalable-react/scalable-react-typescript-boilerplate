import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Section from '../';
import props from './__mocks__/sectionMocks.mock';

describe('<Section />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Section>
        <div />
      </Section>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with different props', () => {
    const wrapper = shallow(
      <Section {...props}>
        <div />
      </Section>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
