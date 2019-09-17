import React from 'react';
import {
    Modal
} from 'react-bootstrap';

export default class MyModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.show !== prevProps.show) {
            this.setState({
                show: this.props.show
            });
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <Modal show={this.state.show} onHide={() => this.props.onClose()} dialogClassName="custom-modal" bsSize={this.props.size ? this.props.size : "medium"}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
            </Modal>
        );
    }
}
