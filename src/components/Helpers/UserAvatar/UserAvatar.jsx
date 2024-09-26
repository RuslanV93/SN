import React from 'react';

const UserAvatar = (props) => {
  return (
    <div className={props.styleProps['post-img-container']}>
      <img
        className={props.styleProps['post-img']}
        src={props.user.profilePicture}
        alt="img"
      >
        {}
      </img>
    </div>
  );
};

export default UserAvatar;
