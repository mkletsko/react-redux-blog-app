import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItem from '../components/PostItem';
import {Item, Dimmer, Loader} from 'semantic-ui-react';
import {loadPosts, removePost} from "../actions/PostListAction";
import {connect} from "react-redux";
import {showModal} from "../actions/PostDetailAction";

class PostListContainer extends Component {

    loadingComponent() {
        return (
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
        );
    }

    componentDidMount(){
        this.props.loadPostsAction(this.props.userID);
    }

    shouldComponentUpdate(nextProps){
        if (nextProps.componentProps.isUpdate)
            nextProps.loadPostsAction(nextProps.userID);

        return true;
    }

    render() {
        const {componentProps, loadForm, removePostAction, showModalAction} = this.props;
        let list = componentProps.postList && componentProps.postList.map(item => {
            return <PostItem
                body={item.body}
                title={item.title}
                id={item.id}
                key={item.id}
                loadForm={loadForm}
                removePost={removePostAction}
                showModal={showModalAction}
            />
        });

        return (
            <Item.Group>
                {componentProps.isLoading && this.loadingComponent()}
                {list}
            </Item.Group>
        )
    }
}

const mapStateToProps = store => {
    return {
        componentProps: store.postList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadPostsAction: postList => dispatch(loadPosts(postList)),
        removePostAction: postList => dispatch(removePost(postList)),
        showModalAction:  mode => dispatch(showModal(mode))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListContainer);

