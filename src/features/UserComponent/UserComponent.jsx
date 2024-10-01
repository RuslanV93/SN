import React from 'react';
import styles from './UserComponent.module.css';
import Button from '../../components/Helpers/Button/Button';

const UserComponent = (props) => {
  return (
    <div className={styles['user-component-container']}>
      <div>
        <div>
          <img src={props.userPhoto} className={styles['users-photo']} />
        </div>

        {props.isFollowed ? (
          <Button
            btnStyles={{ ...styles }}
            click={() => {
              props.unFollowUser(props.id);
            }}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            btnStyles={{ ...styles }}
            click={() => {
              props.followUser(props.id);
            }}
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
