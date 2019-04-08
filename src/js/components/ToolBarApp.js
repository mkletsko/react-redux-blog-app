import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {System} from '../config/constants';
import {Button} from 'semantic-ui-react'

export default class ToolBarApp extends Component {
    constructor(props) {
        super(props);
    }

    onBtnClick = () => {
        this.props.showModal(true);
        this.props.loadForm(System.VIEW_MODE.ADD);
    };

    render() {

        return (
            <div className='toolbar-app'>
                <Button onClick={this.onBtnClick}>Create new post</Button>
            </div>
        )
    }
}

ToolBarApp.propTypes = {
    loadForm: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
};

