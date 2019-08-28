import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
    
    render() {
        const { title, desc } = this.props;

        if(!title) {
            return null;
        }

        return(
            <div data-test="listitem-component">
                <h2 data-test="listitem-title">{title}</h2>
                <p data-test="listitem-desc">{desc}</p>
            </div>
        );
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
};

export default ListItem;