import { connect } from 'react-redux';
import {
  followUserClick,
  getUsers,
  setCurrentPage,
  setFollowingProgress,
} from '../../state/UsersReducer';
import React from 'react';
import AllUsersComponent from './AllUsersComponent';
import LoaderComponent from '../../components/Helpers/loader/LoaderComponent';
import { compose } from 'redux';

class AllUsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  onFollowClick = (id, actionType) => {
    this.props.followUserClick(id, actionType);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <LoaderComponent /> : null}
        <AllUsersComponent
          USERS_DATA={this.props.USERS_DATA}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          onFollowClick={this.onFollowClick}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
        ></AllUsersComponent>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    USERS_DATA: state.UsersPage.USERS_DATA,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    followingInProgress: state.UsersPage.followingInProgress,
  };
};

const dispatches = {
  setCurrentPage,
  setFollowingProgress,
  getUsers,
  followUserClick,
};
export default compose(
  connect(mapStateToProps, dispatches)
  // WithAuthRedirect
)(AllUsersContainer);
