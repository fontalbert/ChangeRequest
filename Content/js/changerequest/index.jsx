import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//Modules
import LoadingOverlay from '../common/loading-overlay.jsx';
import MyToastr from "../common/toastr/myToastr.jsx";

import AppService from '../app/service/app-service.jsx';

class ChangeRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            resources: null
        };

        // 'this' bindings

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

    render() {
 
        return (
            <LoadingOverlay status={this.state.loading}>
                {this.state.resources ?
                    <React.Fragment>
                        <MyToastr />
                        <a className="btn btn-default" href={this.props.mainUrl}>{this.state.resources.btnBack}</a>
                    </React.Fragment>

                    : ''}
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