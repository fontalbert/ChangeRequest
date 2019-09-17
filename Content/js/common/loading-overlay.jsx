import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingOverlay extends React.Component {
    render() {
        return (
            <div style={{ position: "relative" }}>
                <div className={"overlay" + (!this.props.status ? " cloak" : "")}>
                    <div className="loader">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                <div className={this.props.status ? "blurred" : ""}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

LoadingOverlay.propTypes = {
    status: PropTypes.bool.isRequired,
};