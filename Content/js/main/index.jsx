import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import LoadingOverlay from '../common/loading-overlay.jsx';
import MyToastr from "../common/toastr/myToastr.jsx";

import AppService from "../app/service/app-service.jsx";
import AppContext from '../app/context/app-context.jsx';



class Main extends React.Component {
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
                AppService.getMainResources(this.props.api,
                    //Success function
                    (resources) => this.setState({ resources, loading: false }),
                    //Fails function
                    (error) => {
                        this.setState({ loading: false });
                        MyToastr.error(error);
                    });
            });
        }
    }

    render() {
        const { loading } = this.state;
        var context = {
            ...this.props,
            resources: this.state.resources
        };

        console.log(this.state.resources);

        return (
            <LoadingOverlay status={loading}>
                {this.state.resources ?
                    <React.Fragment>
                        <MyToastr />
                        <AppContext.Provider value={context}>
                            <h1>{this.state.resources.SayHello}</h1>
                            <a className="btn btn-default" href={this.props.changerequestUrl}>Add New Change Request</a>
                        </AppContext.Provider>
                    </React.Fragment> : ''}
            </LoadingOverlay>
        );
    }
}
//Requeired props for Main component
Main.propTypes = {
    api: PropTypes.string.isRequired,
    changerequestUrl: PropType.string.isRequired
};

$(document).ready(function () {
    let entryElement = document.getElementById('entry');
    let changerequestUrl = entryElement.getAttribute('data-changerequesturl');
    var sfBaseURL = $.ServicesFramework(entryElement.getAttribute('data-moduleid')).getServiceRoot('Margin/ChangeRequest');
    ReactDOM.render(<Main api={sfBaseURL} changerequestUrl={changerequestUrl}  />, entryElement);
});