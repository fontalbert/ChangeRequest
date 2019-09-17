import React from 'react';
import PropTypes from 'prop-types';

export default class OkButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-primary" {...this.props} onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

OkButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};