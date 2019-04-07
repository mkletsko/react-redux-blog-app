import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {PostDetail} from '../components/PostDetail';
import {
    loadPostDetail,
    showModal,
    handleChangeTitle,
    handleChangeText,
    saveNewPost
} from "../actions/PostDetailAction.js";

class PostDetailContainer extends Component {

    render() {
        const {
            formID,
            userID,
            loadPostDetailAction,
            showModalAction,
            componentProps,
            viewMode,
            handleChangeTitleAction,
            handleChangeTextAction,
            saveNewPostAction
        } = this.props;

        return (
            <Fragment>
                {componentProps.isShowModal && <PostDetail
                    userID={userID}
                    formID={formID}
                    viewMode={viewMode}
                    loadPostDetail={loadPostDetailAction}
                    showModalDetail={showModalAction}
                    detail={componentProps.detail}
                    comments={componentProps.comments}
                    isShowModal={componentProps.isShowModal}
                    handleChangeTitle={handleChangeTitleAction}
                    handleChangeText={handleChangeTextAction}
                    saveNewPost={saveNewPostAction}
                    postTitleValue={componentProps.postTitleValue}
                    postTextValue={componentProps.postTextValue}
                />}
            </Fragment>
        )
    }
}

PostDetail.propTypes = {
    userID: PropTypes.number,
    formID: PropTypes.number,
    loadPostDetailAction: PropTypes.func,
    showModalAction: PropTypes.func,
    componentProps: PropTypes.object,
    viewMode: PropTypes.string,
    handleChangeTitleAction: PropTypes.func,
    handleChangeTextAction: PropTypes.func,
    saveNewPostAction: PropTypes.func,
};

const mapStateToProps = store => {
    return {
        componentProps: store.postDetail
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadPostDetailAction: formID => dispatch(loadPostDetail(formID)),
        showModalAction: mode => dispatch(showModal(mode)),
        handleChangeTitleAction: value => dispatch(handleChangeTitle(value)),
        handleChangeTextAction: value => dispatch(handleChangeText(value)),
        saveNewPostAction: value => dispatch(saveNewPost(value))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailContainer);

