import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostListContainer from '../containers/PostListContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    renderModal() {
        const {formID, viewMode, userID} = this.props;

        return <PostDetailContainer userID={userID} viewMode={viewMode} formID={formID}/>;
    }

    render() {
        const {loadForm, viewMode, userID} = this.props;

        return (
            <div className='content-app'>
                {viewMode && this.renderModal()}
                <PostListContainer loadForm={loadForm} userID={userID}/>
            </div>
        );

    }
}

Form.propTypes = {
    formID: PropTypes.number,
    viewMode: PropTypes.string,
    userID: PropTypes.number,
};
