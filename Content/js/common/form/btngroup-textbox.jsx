import React from 'react';
import PropTypes from 'prop-types';
import TextBox from './textbox.jsx';

export default class ButtonGroupTextBox extends React.Component {
    render() {
       
        return (
            <div className="input-group input-group-label">
                <TextBox label={this.props.label} value={this.props.value}
                    onChange={(value) => this.props.onChange(value)}
                    onBlur={(value) => typeof this.props.onBlur === 'function' ? this.props.onBlur(value) : false}
                    required={this.props.required}
                />

                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={() => this.props.onClick()}><i className={this.props.buttonIcon} /></button>
                </span>
            </div>
        );
    }
}

ButtonGroupTextBox.propTypes = {
    buttonIcon: PropTypes.string.isRequired,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};