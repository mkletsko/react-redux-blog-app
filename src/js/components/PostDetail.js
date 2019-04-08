import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {System} from '../config/constants';
import {Button, Header, Modal, Comment, Input, Form, TextArea} from 'semantic-ui-react'

export class PostDetail extends Component {
    constructor(props) {
        super(props);
    }

    // if this modal window is opening in view mode
    // then needing loading information for current post
    componentDidMount() {
        if (this.props.viewMode === System.VIEW_MODE.EDIT)
            this.props.loadPostDetail(this.props.formID);
    }

    // setting mode (true/false) in store for opening modal window
    closeModal = () => {
        this.props.showModalDetail(!this.props.isShowModal);
    };

    // running action for saving new post
    saveNewPost = () => {
        const {postTitleValue, postTextValue, saveNewPost, userID} = this.props;
        this.closeModal();
        saveNewPost({
            title: postTitleValue,
            text: postTextValue,
            userID
        });
    };

    // setting entered title text for new post in store
    handleChangeTitlePost = (e) => {
        let value = e.target.value;
        this.props.handleChangeTitle(value);
    };

    // setting entered text for new post in store
    handleChangeTextPost = (e) => {
        let value = e.target.value;
        this.props.handleChangeText(value);
    };

    // this template render when open modal for creating new post
    renderNewPost() {
        return <Fragment>
            <Modal.Header>New post</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Input fluid placeholder='Enter post title...' onChange={this.handleChangeTitlePost} />
                    <Form className='detail-post-textarea'>
                        <TextArea placeholder='Tell us more' style={{minHeight: 200}} onChange={this.handleChangeTextPost} />
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Fragment>;
    }

    // this template render when open modal for displaying current post
    renderCurrentPost() {
        const {detail, comments} = this.props;

        return <Fragment>
            <Modal.Header>{detail.title}</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <p>{detail.body}</p>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Comments
                        </Header>
                        {this.renderComments(comments)}
                    </Comment.Group>
                </Modal.Description>
            </Modal.Content>
        </Fragment>;
    }

    // this template render when open modal for displaying comments for current post
    renderComments(comments) {
        return comments.map(item => {
            return <Comment key={item.id}>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>{item.name}</Comment.Author>
                    <Comment.Metadata>
                        <div>{item.email}</div>
                    </Comment.Metadata>
                    <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
            </Comment>
        });
    }

    render() {
        const {isShowModal, viewMode} = this.props;

        return (
            <Fragment>
                {isShowModal &&
                <Modal dimmer={true} open={isShowModal} onClose={this.close}>
                    {viewMode === System.VIEW_MODE.ADD && this.renderNewPost()}
                    {viewMode === System.VIEW_MODE.EDIT && this.renderCurrentPost()}
                    <Modal.Actions>
                        <Button color='black' onClick={this.closeModal}>
                            Close
                        </Button>
                        {viewMode === System.VIEW_MODE.ADD && <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Save post'
                            onClick={this.saveNewPost}
                        />}
                    </Modal.Actions>
                </Modal>}
            </Fragment>

        )
    }
}

PostDetail.propTypes = {
    loadForm: PropTypes.func,
    isShowModal: PropTypes.bool,
    viewMode: PropTypes.string,
    detail: PropTypes.object,
    comments: PropTypes.array,
};

