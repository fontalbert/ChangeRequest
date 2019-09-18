import React from 'react';

import AppContext from '../../app/context/app-context.jsx';

export default class ChangeRequestRow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <tr>
                <td className="item1">{this.props.value.Title}</td>
                <td className="item2">{this.props.value.Status}</td>
                <td className="item3">{this.props.value.Priority}</td>
                <td className="item4">{this.props.value.RequestDate}</td>
                <td className="item5">{this.props.value.RequestBy}</td>
                <td className="item6">
                    <i className="glyphicon glyphicon-edit" onClick={() => this.props.onEditRow(this.props.value)} />
                    <i className="glyphicon glyphicon-trash" onClick={() => this.props.onDeleteRow(this.props.value)}/></td>
            </tr>
        );
    }
}

ChangeRequestRow.contextType = AppContext;

