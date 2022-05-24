import React from 'react';
import { shallow } from 'enzyme';
import Counter from "../../components/Counter";
import '@testing-library/jest-dom';

describe('Testing Counter', () => {

    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<Counter />);
    });

    describe('Testing plus button', () => {
        test('One click', () => {
            wrapper.find('button').at(0).simulate('click');
    
            expect(wrapper.find('#value').text()).toBe("El valor de la variable contador es: 1");
            expect(wrapper.find('#condition').text()).toBe("Es menor o igual a dos");
        });

        test('Two clicks', () => {
            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(0).simulate('click');

            expect(wrapper.find('#value').text()).toBe("El valor de la variable contador es: 2");
            expect(wrapper.find('#condition').text()).toBe("Es menor o igual a dos");
        });

        test('Three clicks', () => {
            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(0).simulate('click');

            expect(wrapper.find('#value').text()).toBe("El valor de la variable contador es: 3");
            expect(wrapper.find('#condition').text()).toBe("Es mayor a dos");
        });
    });

    describe('Testing minus button', () => {
        test('One click', () => {
            wrapper.find('button').at(2).simulate('click');
    
            expect(wrapper.find('#value').text()).toBe("El valor de la variable contador es: -1");
        });
    });

    describe('Testing reset button', () => {
        test('click', () => {
            wrapper.find('button').at(1).simulate('click');
    
            expect(wrapper.find('#value').text()).toBe("El valor de la variable contador es: 0");
        });
    });
    
});