/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types'; 

export class HeadLine extends React.Component {

    constructor(props){
        super(props);
    };

    render () {
        const {header, desc} = this.props;
        if(!header) {
            return null;
        }
        return (
            <div data-test="headline-component">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">{desc}</p>
            </div>
        )
    }
}

HeadLine.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
};