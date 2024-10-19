import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../../components/Helpers/loader/LoaderComponent';
import ProfilePage from './ProfilePage';
import {
  addPost,
  getProfilePage,
  getStatus,
  setFetchingStatus,
  setUserProfile,
  textAreaChange,
  updateStatus,
} from '../../state/ProfilePageReducer';
import { compose } from 'redux';

const ProfilePageContainer = (props) => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.profilePage.isFetching);
  const profile = useSelector((state) => state.profilePage.profile);
  const userStatus = useSelector((state) => state.profilePage.status);

  const { userID } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(setFetchingStatus(true));
    setError(null);
    props.getProfilePage(userID).catch((e) => setError(e));

    props.getStatus(userID);
  }, [props, dispatch, userID]);

  if (error) {
    return (
      <div>
        {error.response?.status || 'Неизвестная ошибка'}
        <p>{error.message}</p>
      </div>
    );
  }

  if (isFetching) {
    return <LoaderComponent />;
  } else {
    return (
      <ProfilePage
        profile={profile}
        userStatus={userStatus}
        updateStatus={props.updateStatus}
      />
    );
  }
};

const dispatches = {
  getProfilePage,
  getStatus,
  updateStatus,
  addPost,
  textAreaChange,
  setUserProfile,
  setFetchingStatus,
};
export default compose(
  connect(null, dispatches)
  // WithAuthRedirect
)(ProfilePageContainer);
