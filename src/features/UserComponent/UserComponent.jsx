import React from 'react';
import styles from './UserComponent.module.css';
import Button from '../../components/Helpers/Button/Button';
import { NavLink } from 'react-router-dom';

const UserComponent = (props) => {
  return (
    <div className={styles['user-component-container']}>
      <div>
        <div>
          <NavLink to={`/profile/${props.id}`}>
            <img
              src={props.userPhoto}
              className={styles['users-photo']}
              alt={'User avatar'}
            />
          </NavLink>
        </div>
        {props.isFollowed ? (
          <Button
            userId={props.id}
            followingInProgress={props.followingInProgress}
            btnStyles={{ ...styles }}
            click={() => props.onFollowClick(props.id, 'unfollow')}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            userId={props.id}
            followingInProgress={props.followingInProgress}
            btnStyles={{ ...styles }}
            click={() => props.onFollowClick(props.id, 'follow')}
          >
            Follow
          </Button>
        )}
      </div>
      <div>
        <div>{props.name}</div>
        <div>{props.status}</div>
      </div>
      <div>
        {/*<div>{props.country}</div>*/}
        {/*<div>{props.city}</div>*/}
        Location will be here
      </div>
    </div>
  );
};

export default UserComponent;
