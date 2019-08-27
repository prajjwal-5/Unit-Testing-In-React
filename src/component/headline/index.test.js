import React from 'react';
import { shallow } from 'enzyme';
import { Headline, HeadLine } from './index';
import {findByTestAttr} from '../../utils';

const setUp = (props={}) => {
    return shallow(<HeadLine {...props}/>);
}

describe('Headline Component', () => {

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