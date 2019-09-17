import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
                     
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={this.props.checked} onChange={(e) => this.props.onChange(e.target.checked)} /> {this.props.label ? <strong>{this.props.label}</strong> : ''}
                </label>
            </div>
        );
    }
}

CheckBox.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};