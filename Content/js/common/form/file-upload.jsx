import React from 'react';
import PropTypes from 'prop-types';

export default class FileUpload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file: {
                name: '',
                content: ''
            }
        };

        this.handleChangeFile = this.handleChangeFile.bind(this);
    }
   
    handleChangeFile(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        let name = file.name;

        reader.onloadend = () => {
            this.setState({
                file: {
                    name,
                    content: reader.result
                }
            },() => this.props.onChange(this.state.file));
        };

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <div className="form-group">
                {this.props.label ?
                    <label className="control-label">{this.props.label}</label> : ''}
                <input type="file" value={this.props.value} onChange={this.handleChangeFile}
                    data-parsley-required={(this.props.required === true)} />
            </div>
        );
    }
}

FileUpload.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};