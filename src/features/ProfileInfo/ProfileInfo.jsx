import React from 'react';
import styles from './ProfileInfo.module.css';
import defaultAvatar from '../../images/defaultAvatar.jpg';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <NotFoundPage />;
  }

  return (
    <div className={`${styles['profile-info']} `}>
      <img
        className={styles['profile-image']}
        src={
          props.profile.photos && props.profile.photos.large
            ? props.profile.photos.large
            : defaultAvatar
        }
        alt="profile-photo"
      ></img>
      <div className={styles.description}>
        <h3>{props.profile.fullName}</h3>
        <ProfileStatus profile={props.profile} status={'status'} />
      </div>
    </div>
  );
};

export default ProfileInfo;
