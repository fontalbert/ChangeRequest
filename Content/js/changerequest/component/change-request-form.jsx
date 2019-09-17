import React from 'react';

//Modules

import MyToastr from '../../common/toastr/myToastr.jsx';
import AppContext from '../../app/context/app-context.jsx';

//Models
import ChangeRequest from '../model/change-request.jsx';



export default class ChangeRequestForm extends React.Component {
    constructor(props) {
        super(props);
       
        //this.changeRequest = new ChangeRequest();
        this.status = [
            { text: 'Select an option', value: '' },
            { text: 'Open', value: 'Open' },
            { text: 'In Progress', value: 'In Progress' },
            { text: 'Closed', value: 'Closed' }
        ];

        this.priority = [
            { text: 'Select an option', value: '' },
            { text: '1-High', value: '1-High' },
            { text: '2-Medium', value: '2-Medium' },
            { text: '3-Low', value: '3-Low' }
        ];


        this.state = {
            loading: false,
            changeRequest: null
        };

        // 'this' bindings
    }

    //if the component is rendered for the first time
    componentDidMount() {
        this.load(true);
    }

    load(componentDidMount) {
        if (componentDidMount) {
            this.setState({
                changeRequest: new ChangeRequest()
            });
        }
    }

    render() {
        console.log(this.context);
        return (
            <React.Fragment>
                <MyToastr />
                {this.state.changeRequest ?
                    <form id="editForm" className="row">
                        <div className="col-md-6">
                            Column 1
                        </div>
                        <div className="col-md-6">
                            Column 2
                        </div>

                        <div className="col-md-12">
                            <a href={this.context.mainUrl} className="btn btn-default">{this.context.resources.btnBack}</a>
                        </div>
                        {JSON.stringify(this.state.changeRequest)}
                    </form> : ''}
            </React.Fragment>

        );
    }
}

ChangeRequestForm.contextType = AppContext;

