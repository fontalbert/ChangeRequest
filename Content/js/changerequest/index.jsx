import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//Modules
import LoadingOverlay from '../common/loading-overlay.jsx';
import MyToastr from "../common/toastr/myToastr.jsx";

//App Components
import AppService from '../app/service/app-service.jsx';
import AppContext from '../app/context/app-context.jsx';

import ChangeRequestService from './services/change-request-service.jsx';

//Form Components
import ChangeRequestForm from './component/change-request-form.jsx';

class ChangeRequest extends React.Component {
    constructor(props) {
        super(props);

        this.parsley;

        this.state = {
            loading: false,
            resources: null,
            //We have this state as int to ensure it always refreshes and is different from the previous value
            restartForm: 1 
        };

        // 'this' bindings
        this.handlerSave = this.handlerSave.bind(this);
    }

    componentDidMount() {
        this.load(true);
    }

    load(init = false) {
        if (init) {
            this.setState({
                loading: true
            }, () => {
                //Get the resources from the server
                AppService.getChangeRequestResources(this.props.api,
                    //Success function
                    (resources) => {
                        this.setState({ resources, loading: false });
                        //MyToastr.error("You Get the Resources.");
                    },
                    //Fails function
                    (error) => {
                        this.setState({ loading: false });
                        MyToastr.error(error);
                    });
            });
        }

    }

    handlerSave(obj) {

        //if validations are not initialized then we call parsley on the form
        if (this.parsley === undefined) {
            this.parsley = $("#editForm").parsley();
        }

        //Validate the form
        this.parsley.validate();

        //if it is valid then we can continue
        if (this.parsley.isValid() && obj) {
            ChangeRequestService.save(this.props.api, obj,
                (success) => {
                    console.log(success);
                    this.setState({ restartForm: this.state.restartForm + 1 });
                },
                (fails) => console.log(fails)
            );
        }
    }

    render() {

        var context = {
            ...this.props,
            resources: this.state.resources
        };
 
        return (
            <LoadingOverlay status={this.state.loading}>
                {this.state.resources ?
                    <React.Fragment>
                        <MyToastr />
                        <AppContext.Provider value={context}>
                            <ChangeRequestForm restartForm={this.state.restartForm} onSave={(changerequest) => this.handlerSave(changerequest)} />
                        </AppContext.Provider>
                    </React.Fragment> : ''}
            </LoadingOverlay>
        );
    }
}
//Requeired props for Main component
ChangeRequest.propTypes = {
    api: PropTypes.string.isRequired,
    mainUrl: PropTypes.string.isRequired
};

$(document).ready(function () {
    let entryElement = document.getElementById('entry');
    let mainUrl = entryElement.getAttribute('data-mainurl');
    var sfBaseURL = $.ServicesFramework(entryElement.getAttribute('data-moduleid')).getServiceRoot('Margin/ChangeRequest');
    ReactDOM.render(<ChangeRequest api={sfBaseURL} mainUrl={mainUrl} />, entryElement);
});