import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ChangeRequestAdd extends React.Component {
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
            });
        }
    }

    render() {
        
        return (
            <React.Fragment>
                
                <a className="btn btn-default" href={this.props.mainUrl}>Add New Change Request</a>

            </React.Fragment>
        );
    }
}
//Requeired props for Main component
ChangeRequestAdd.propTypes = {
    api: PropTypes.string.isRequired,
    mainurl: PropTypes.string.isRequired
};

$(document).ready(function () {
    let entryElement = document.getElementById('entry');
    let mainUrl = entryElement.getAttribute('data-mainurl');
    var sfBaseURL = $.ServicesFramework(entryElement.getAttribute('data-moduleid')).getServiceRoot('Margin/ChangeRequest');
    ReactDOM.render(<ChangeRequestAdd api={sfBaseURL} mainUrl={mainUrl} />, entryElement);
});