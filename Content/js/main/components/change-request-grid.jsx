import React from 'react';

import AppContext from '../../app/context/app-context.jsx';

import ChangeRequestRow from './change-request-row.jsx';

export default class ChangeRequestGrid extends React.Component {
    constructor(props) {
        super(props);
        this.parsley;

        this.state = {
            loading: false,
            list: null,
            resources: null
        };

        // 'this' bindings
    }

    render() {

        return (
            <table className="table grid-container">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Request Date</th>
                        <th>Request By</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list ?
                        this.props.list.map((x) => <ChangeRequestRow value={x} />)
                        : ''}
                </tbody>
            </table>
        );
    }
}

ChangeRequestGrid.contextType = AppContext;

