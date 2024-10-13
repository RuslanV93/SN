import React from 'react';
import styles from './AllUsersPage.module.css';
import UserComponent from '../../features/UserComponent/UserComponent';
import userPhoto from '../../images/defaultAvatar.jpg';

const AllUsersComponent = (props) => {
  const pages = [];
  const currentPage = props.currentPage;
  let startPage, endPage;
  if (currentPage <= 5) {
    startPage = 1;
    endPage = 11;
  } else {
    startPage = currentPage - 5;
    endPage = currentPage + 5;
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div
      className={`${styles.usersPageContainer} ${
        props.isFetching ? styles['isLoading'] : null
      }`}
    >
      <div className={styles['pages-count-container']}>
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => props.onPageChange(page)}
            className={`${
              currentPage === page && styles['selected-page']
            } ${styles['pages-link']}`}
          >
            {page}
          </span>
        ))}
      </div>
      {props.USERS_DATA.map((user) => (
        <UserComponent
          id={user.id}
          userPhoto={user.photos.large ? user.photos.large : userPhoto}
          key={user.id}
          isFollowed={user.followed}
          name={user.name}
          status={user.status}
          setFollowingProgress={props.setFollowingProgress}
          followingInProgress={props.followingInProgress}
          onFollowClick={props.onFollowClick}
        />
      ))}
    </div>
  );
};

export default AllUsersComponent;
