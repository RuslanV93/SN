import React from 'react';
import UserComponent from '../../features/UserComponent/UserComponent';
import userPhoto from '../../images/Ruslan.jpg';
import axios from 'axios';

class AllUsersComponent extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      console.log('hello');
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div>
        {this.props.USERS_DATA.map((user) => (
          <UserComponent
            id={user.id}
            userPhoto={user.userPhoto ? user.userPhoto : userPhoto}
            key={user.id}
            isFollowed={user.isFollowed}
            name={user.name}
            status={user.status}
            // city={user.location.city}
            // country={user.location.country}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        ))}
      </div>
    );
  }
}

export default AllUsersComponent;
