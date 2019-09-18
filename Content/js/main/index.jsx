import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import LoadingOverlay from '../common/loading-overlay.jsx';
import MyToastr from "../common/toastr/myToastr.jsx";

import AppService from "../app/service/app-service.jsx";
import MainService from './services/main-service.jsx';

import AppContext from '../app/context/app-context.jsx';

import ChangeRequestGrid from './components/change-request-grid.jsx';



class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            resources: null,
            list: []
        };

        // 'this' bindings
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

        MainService.getList(this.props.api,
            //Success function
            (list) => this.setState({ list }),
            //Fails function
            (error) => {
                MyToastr.error(error);
            });
    }

    handleDelete(obj) {
        
        var r = confirm(this.state.resources.txtDeleteConfirm);
        if (r === true) {
            
            MainService.deleteChangeRequest(this.props.api, obj,
                //Success function
                (message) => { 
                    this.load(false);
                },
                //Fails function
                (error) => {
                    this.setState({ loading: false });
                    MyToastr.error(error);
                });

        }
    }

    handleEdit(obj) {
        console.log("Edit:");
        console.log(obj);
    }

    render() {
        const { loading } = this.state;
        var context = {
            ...this.props,
            resources: this.state.resources
        };


        return (
            <LoadingOverlay status={loading}>
                {this.state.resources ?
                    <React.Fragment>
                        <MyToastr />
                        <AppContext.Provider value={context}>
                            <a className="btn btn-default" href={this.props.changerequestUrl}>Add New Change Request</a>
                            <ChangeRequestGrid list={this.state.list} onEdit={(obj) => this.handleEdit(obj)} onDelete={(obj) => this.handleDelete(obj)} />
                        </AppContext.Provider>
                    </React.Fragment> : ''}
            </LoadingOverlay>
        );
    }
}
//Requeired props for Main component
Main.propTypes = {
    api: PropTypes.string.isRequired,
    changerequestUrl: PropTypes.string.isRequired
};

$(document).ready(function () {
    let entryElement = document.getElementById('entry');
    let changerequestUrl = entryElement.getAttribute('data-changerequesturl');
    var sfBaseURL = $.ServicesFramework(entryElement.getAttribute('data-moduleid')).getServiceRoot('Margin/ChangeRequest');
    ReactDOM.render(<Main api={sfBaseURL} changerequestUrl={changerequestUrl}  />, entryElement);
});