import React from 'react';
import PropTypes from 'prop-types';

export default class TextBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        //let validationType = this.props.type !== "number" ? this.props.type : "text";
        let textbox = "";

        if (this.props.multiline) {
            textbox = (
                <textarea className="form-control" value={this.props.value}
                    onChange={(e) => this.props.onChange(e.target.value)} rows={this.props.rows}
                    data-parsley-required={(this.props.required === true)}
                />
            );
        }
        else {
            textbox = (
                <input type="text" className="form-control" value={this.props.value}
                    onChange={(e) => this.props.onChange(e.target.value)}
                    onBlur={(e) => { typeof this.props.onBlur === "function" ? this.props.onBlur(e.target.value) : false; }}
                    data-parsley-type={this.props.type}
                    data-parsley-required={(this.props.required === true)}
                    data-parsley-pattern={this.props.pattern}
                    placeholder={this.props.placeholder}
                />
            );
        }

        return (
            <div className="form-group">
                {this.props.label ?
                    <label className="control-label">{this.props.label}</label> : ''}
                {textbox}
            </div>
        );
    }
}

TextBox.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};