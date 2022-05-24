import React from 'react';
import { shallow } from 'enzyme';
import PropsTest from "../../components/props_test";
import '@testing-library/jest-dom';

describe('Testing props', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<PropsTest title='Default title' />);
        expect(wrapper.find('h1').text()).toBe('Default title');
    });

    test('should render correctly with different props', () => {
        const wrapper = shallow(<PropsTest />);
        expect(wrapper.find('h2').text()).toBe('Default description');
    });
})