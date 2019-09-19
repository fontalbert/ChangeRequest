import React from 'react';

//Modules

import MyToastr from '../../common/toastr/myToastr.jsx';
import AppContext from '../../app/context/app-context.jsx';


import ChangeRequestService from '../services/change-request-service.jsx';

//Models
import ChangeRequest from '../model/change-request.jsx';

//Form Control Components
import TextBox from '../../common/form/textbox.jsx';
import DateTime from '../../common/form/datetime.jsx';
import ComboSelector from '../../common/form/combo-selector.jsx';
import OkButton from '../../common/form/ok-button.jsx';


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

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.restartForm !== prevProps.restartForm) {
            this.load(true);
        }
    }

    load(componentDidMount) {
        if (componentDidMount) {
            if (this.context.changeRequestId) {
                ChangeRequestService.get(this.context.api, this.context.changeRequestId,
                    (obj) => {
                        console.log(obj);
                        this.setState({ changeRequest: ChangeRequest.Create(obj) });
                    },
                    (fails) => console.log(fails)
                );
            }
            else {
                this.setState({
                    changeRequest: new ChangeRequest()
                });
            }
        }
    }

    render() {
        //console.log(this.context);
        return (
            <React.Fragment>
                <MyToastr />
                {this.state.changeRequest ?
                    <form id="editForm" className="row">
                        <div className="col-md-6">
                            <ComboSelector label={this.context.resources.lblStatus} required
                                options={this.status} onChange={(value) =>
                                    this.setState({
                                        changeRequest: {
                                            ...this.state.changeRequest,
                                            Status: value
                                        }
                                    })}
                                value={this.state.changeRequest.Status}
                            />
                            <TextBox label={this.context.resources.lblTitle} required
                                onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        Title: value
                                    }
                                })}
                                value={this.state.changeRequest.Title}
                            />
                            <TextBox label={this.context.resources.lblDescription}
                                multiline onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        Description: value
                                    }
                                })}
                                value={this.state.changeRequest.Description}
                            />
                            <TextBox label={this.context.resources.lblJustification}
                                multiline onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        Justification: value
                                    }
                                })}
                                value={this.state.changeRequest.Justification}
                            />
                        </div>
                        <div className="col-md-6">
                            <TextBox label={this.context.resources.lblImpact}
                                multiline onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        Impact: value
                                    }
                                })}
                                value={this.state.changeRequest.Impact}
                            />
                            <DateTime label={this.context.resources.lblRequestDate} required
                                locale="en-ie" format='Date' onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        RequestDate: value
                                    }
                                })}
                                value={this.state.changeRequest.RequestDate}
                            />
                            <TextBox label={this.context.resources.lblRequestBy} required
                                onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        RequestBy: value
                                    }
                                })}
                                value={this.state.changeRequest.RequestBy}
                            />
                            <ComboSelector label={this.context.resources.lblPriority} required
                                options={this.priority} onChange={(value) => this.setState({
                                    changeRequest: {
                                        ...this.state.changeRequest,
                                        Priority: value
                                    }
                                })}
                                value={this.state.changeRequest.Priority}
                            />
                        </div>

                        <div className="col-md-12">
                            <OkButton label={this.context.resources.btnSave} onClick={() => this.props.onSave(this.state.changeRequest)} /> {' '}
                            <a href={this.context.mainUrl} className="btn btn-default">{this.context.resources.btnBack}</a>
                        </div>
                        {JSON.stringify(this.state.changeRequest)}
                    </form> : ''}
            </React.Fragment>

        );
    }
}

ChangeRequestForm.contextType = AppContext;

