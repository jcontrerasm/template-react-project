import * as React from 'react';
import { shallow } from 'enzyme';
import { Title } from './index';

describe('The Title component', () => {
  describe('Render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(<Title text="hola"/>);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
