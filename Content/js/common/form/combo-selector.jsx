import React from 'react';
import PropTypes from 'prop-types';

export default class ComboSelector extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="form-group">
                {this.props.label?
                    <label className="control-label">{this.props.label}</label> : ''}
                <select className="form-control" value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)}
                    data-parsley-required={(this.props.required === true)}>
                    {this.props.options.map((x) => <option key={x.value} value={x.value}>{x.text || x.value}</option>)}
                </select>
            </div>
        );
    }
}


ComboSelector.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};