import React from 'react';
import PropTypes from 'prop-types';

import Datetime from 'react-datetime';
import "style-loader!css-loader!react-datetime/css/react-datetime.css";


export default class DateTime extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let dateFormat = false;
        let timeFormat = false;

        //Can be Date or DateTime
        if (this.props.format.indexOf("Date") !== -1) {
            dateFormat = this.props.dateFormat ? this.props.dateFormat : true;
        }
        //Can be Time or DateTime
        if (this.props.format.indexOf("Time") !== -1) {
            timeFormat = this.props.timeFormat ? this.props.timeFormat : true;
        }


        return (
            <div className="form-group">
                {this.props.label ?
                    <label className="control-label">{this.props.label}</label> : ''}
                <Datetime dateFormat={dateFormat} timeFormat={timeFormat} onChange={(date) => this.props.onChange(date)} value={this.props.value} inputProps={{ readOnly: true, "data-parsley-required": (this.props.required === true) }} />
            </div>
        );
    }
}


DateTime.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};