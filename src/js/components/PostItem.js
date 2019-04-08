import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {System} from '../config/constants';
import {Item, Button} from 'semantic-ui-react';

export default class PostItem extends Component {
    constructor(props) {
        super(props);
    }

    viewDetailPost = () => {
        this.props.showModal(true);
        this.props.loadForm(System.VIEW_MODE.EDIT, this.props.id);
    };

    removePost = () => {
        this.props.removePost(this.props.id);
    };

    render() {
        const {title, body} = this.props;

        return (
            <Item className='post-item'>
                <Item.Content>
                    <Item.Header>{title}</Item.Header>
                    <Item.Meta className='post-body-item'>{body}</Item.Meta>
                </Item.Content>
                <Button.Group className='button-group-item'>
                    <Button onClick={this.viewDetailPost}>View</Button>
                    <Button.Or text='or' />
                    <Button negative onClick={this.removePost}>Remove</Button>
                </Button.Group>
            </Item>
        )
    }
}

PostItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
};

