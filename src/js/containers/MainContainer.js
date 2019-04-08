import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadForm} from '../actions/AppActions';
import {showModal} from '../actions/PostDetailAction';
import UsersListContainer from '../containers/UsersListContainer';
import ToolBarApp from '../components/ToolBarApp';
import {Header} from 'semantic-ui-react'

class MainContainer extends Component {

    render() {
        const {application, loadFormAction, showModalAction} = this.props;

        return (
            <div>
                <Header className='header-app' as='h1'>Blog SPA</Header>
                <ToolBarApp loadForm={loadFormAction} showModal={showModalAction}/>

                <UsersListContainer
                    formID={application.formID}
                    viewMode={application.viewMode}
                    loadForm={loadFormAction}
                />
            </div>
        );
    }
}

MainContainer.propTypes = {
    application: PropTypes.object,
    loadFormAction: PropTypes.func,
    showModalAction: PropTypes.func,
};

const mapStateToProps = store => {
    return {
        application: store.application
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadFormAction: (viewMode, formID) => dispatch(loadForm(viewMode, formID)),
        showModalAction: mode => dispatch(showModal(mode))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
