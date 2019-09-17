import React from 'react';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { toastr } from 'react-redux-toastr';
import { createStore, combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import '!style-loader!css-loader!react-redux-toastr/lib/css/react-redux-toastr.min.css';


const reducers = {
    // ... other reducers ...
    toastr: toastrReducer // <- Mounted at toastr.
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);


const options = {
    timeOut: 8000,
    removeOnHover: false,
    closeOnToastrClick: true,
    showCloseButton: true,
    progressBar: false
};


export default class MyToastr extends React.Component {

    static error(msg, timeout = options.timeOut) {
        toastr.error(msg, {
            timeOut: timeout,
            removeOnHover: options.removeOnHover,
            closeOnToastrClick: options.closeOnToastrClick,
            showCloseButton: options.showCloseButton,
            progressBar: options.progressBar
        });
    }

    static success(msg, timeout = options.timeOut / 2) {
        toastr.success(msg, {
            timeOut: timeout,
            removeOnHover: options.removeOnHover,
            closeOnToastrClick: options.closeOnToastrClick,
            showCloseButton: options.showCloseButton,
            progressBar: options.progressBar
        });
    }

    static warning(msg, timeout = options.timeOut) {
        toastr.warning(msg, {
            timeOut: timeout,
            removeOnHover: options.removeOnHover,
            closeOnToastrClick: options.closeOnToastrClick,
            showCloseButton: options.showCloseButton,
            progressBar: options.progressBar
        });
    }

    static info(msg, timeout = options.timeOut / 2) {
        toastr.info(msg, {
            timeOut: timeout,
            removeOnHover: options.removeOnHover,
            closeOnToastrClick: options.closeOnToastrClick,
            showCloseButton: options.showCloseButton,
            progressBar: options.progressBar
        });
    }

    static responseError(response, timeout = options.timeOut) {
        let errorMessage = '';

        if (response.responseText) {
            errorMessage = JSON.parse(response.responseText).message
                || JSON.parse(response.responseText).MessageDetail
                || JSON.parse(response.responseText).Message
                || response.responseText;
        } else
            errorMessage = response.status + ' ' + response.statusText;

        MyToastr.error(errorMessage, timeout);

    }

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Provider store={store}>
                <div>
                    <ReduxToastr newestOnTop={false} preventDuplicates position="bottom-center" transitionIn="bounceIn" transitionOut="bounceOut" />
                </div>
            </Provider>
        );
    }
}