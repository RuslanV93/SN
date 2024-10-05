import React from 'react';
import styles from './ProfileInfo.module.css';
import defaultAvatar from '../../images/defaultAvatar.jpg';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <NotFoundPage />;
  }

  return (
    <div className={`${styles['profile-info']} `}>
      <img
        className={styles['profile-image']}
        src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}
        alt="profile-photo"
      ></img>
      <div className={styles.description}>
        <h3>{props.profile.fullName}</h3>
        <p>{props.profile.aboutMe ? props.profile.aboutMe : 'Status'}</p>
        <p>
          {props.profile.loockingForAJob
            ? 'Looking for some job'
            : 'working at the moment'}
        </p>
        <ul>
          {Object.entries(props.profile.contacts).map(([key, value]) => (
            <li key={key}>{`${key}: ${value ? value : 'not specified'}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
