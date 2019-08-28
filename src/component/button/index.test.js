import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from '../../utils';
import Button from './index';

describe('Button Component', () => {

    describe('Checking PropTypes', () => {
       
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Test Button Text',
                emitEvent: () => {} 
            };
            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Test Button Text',
                emitEvent: () => {} 
            };
            wrapper = shallow(<Button { ...props }/>);
        });

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'button-component');
            expect(button.length).toBe(1);
        });
    })

});