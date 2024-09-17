import React from 'react';

const UserAvatar = (props) => {
  return (
    <div className={props.styleProps['post-img-container']}>
      <img
        className={props.styleProps['post-img']}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s"
        alt="img"
      ></img>
    </div>
  );
};

export default UserAvatar;
