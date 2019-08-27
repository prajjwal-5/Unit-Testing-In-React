import React from 'react';
import { shallow } from 'enzyme';
import { HeadLine } from './index';

import {findByTestAttr, checkProps} from '../../utils';

const setUp = (props={}) => {
    return shallow(<HeadLine {...props}/>);
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        
        it('Should not throw proptypes warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                users: [{
                    fName: 'Test fName',
                    lname: 'Test lName',
                    email: 'test@email.com',
                    age: 19,
                    onlineStatus: false 
                }]
            };

            const propsErr = checkProps(HeadLine, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

    describe('Have props', () => {

        let component;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'tes Description'
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            let wrapper = findByTestAttr(component, 'headline-component');
            expect(wrapper.length).toBe(1);
        })

        it('Should render a H1', () => {
            let h1 = findByTestAttr(component, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a P', () => {
            let p = findByTestAttr(component, 'desc');
            expect(p.length).toBe(1);
        })


    });

    describe('Have No Props', () => {

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should render with no errors', () => {
            const wrapper = findByTestAttr(component, 'headline-component')
            expect(wrapper.length).toBe(0);
        })

    });
});