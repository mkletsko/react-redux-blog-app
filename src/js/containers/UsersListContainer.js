import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Form from '../components/Form';

import {loadUsers} from "../actions/UsersListAction";
import {Tab} from 'semantic-ui-react'

class UsersListContainer extends Component {

    componentDidMount() {
        this.props.loadUsersAction();
    }

    renderPanes() {
        const {componentProps, formID, viewMode, loadForm} = this.props;

        return componentProps.usersList.map((user) => {
            return {
                menuItem: user.name, render: () =>
                    <Tab.Pane attached={false} key={user.id}>
                        <Form
                            formID={formID}
                            viewMode={viewMode}
                            loadForm={loadForm}
                            userID={user.id}
                        />
                    </Tab.Pane>
            }
        });
    }

    render() {
        return (
            <Tab className='users-list-app'
                menu={{fluid: true, vertical: true, tabular: true}}
                panes={this.renderPanes()}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        componentProps: store.usersList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsersAction: users => dispatch(loadUsers(users))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersListContainer);

