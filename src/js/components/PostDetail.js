import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {System} from "../config/constants";
import {Button, Header, Modal, Comment, Input, Form, TextArea} from 'semantic-ui-react'

export class PostDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.viewMode === System.VIEW_MODE.EDIT)
            this.props.loadPostDetail(this.props.formID);
    }

    closeModal = () => {
        this.props.showModalDetail(!this.props.isShowModal);
    };

    saveNewPost = () => {
        const {postTitleValue, postTextValue, saveNewPost, userID} = this.props;
        this.closeModal();
        saveNewPost({
            title: postTitleValue,
            text: postTextValue,
            userID
        });
    };

    handleChangeTitlePost = (e) => {
        let value = e.target.value;
        this.props.handleChangeTitle(value);
    };

    handleChangeTextPost = (e) => {
        let value = e.target.value;
        this.props.handleChangeText(value);
    };

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
                            content="Save post"
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

