import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import ListItem from './index';

describe('List Item', () => {

    describe('Checking PropTypes', () => {
        
        it('Should NOT return PropTypes warning', () => {
            const expectedProps = {
                title: 'Test Title',
                desc: 'Test Desc'
            }
            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

    describe('Component Renders', () => {

        let component;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'Test Desc'
            };
            component = shallow(<ListItem { ...props }/>);
        });

        it('Should render ListItem component without errors', () => {
            const listItem = findByTestAttr(component, 'listitem-component');
            expect(listItem.length).toBe(1);
        })

        it('Should render Title without errors', () => {
            const title = findByTestAttr(component, 'listitem-title');
            expect(title.length).toBe(1);
        });

        it('Should render Desc without errors', () => {
            const desc = findByTestAttr(component, 'listitem-desc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Component NOT Renders', () => {
        let component;
        beforeEach(() => {
            const props = {
                desc: 'Test Desc'
            };
            component = shallow(<ListItem { ...props }/>);
        });

        it('Should NOT render Component', () => {
            const listItem = findByTestAttr(component, 'listitem-component');
            expect(listItem.length).toBe(0); 
        });
    });

});