import { connect } from 'react-redux';
import {
  followUser,
  setCurrentPage,
  setFetchingStatus,
  setTotalUsersCount,
  setUsers,
  unFollowUser,
} from '../../state/UsersReducer';
import React from 'react';
import axios from 'axios';
import AllUsersComponent from './AllUsersComponent';

import LoaderComponent from '../../components/Helpers/loader/LoaderComponent';

class AllUsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setFetchingStatus(false);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.setFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setFetchingStatus(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <LoaderComponent /> : null}
        <AllUsersComponent
          USERS_DATA={this.props.USERS_DATA}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          isLoading={this.props.isFetching}
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
  };
};

const dispatches = {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setFetchingStatus,
};

export default connect(mapStateToProps, dispatches)(AllUsersContainer);
