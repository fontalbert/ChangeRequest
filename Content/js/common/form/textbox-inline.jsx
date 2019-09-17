import React from 'react';
import PropTypes from 'prop-types';
import TextBox from './textbox.jsx';

export default class TextBoxInline extends React.Component {
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
                    <label className={"control-label col-md-" + this.props.labelColumns}>{this.props.label}</label> : ''}
                <div className={"col-md-" + (12 - this.props.labelColumns)}>
                    {textbox}
                </div>
            </div>
        );
    }
}

TextBoxInline.propTypes = {
    label: PropTypes.string,
    labelColumns: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};