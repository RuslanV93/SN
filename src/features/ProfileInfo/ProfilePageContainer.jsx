import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { setFetchingStatus, setUserProfile } from '../../state/ProfilePageReducer';
import LoaderComponent from '../../components/Helpers/loader/LoaderComponent';
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';

const ProfilePageContainer = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);
  const isFetching = useSelector((state) => state.profilePage.isFetching);
  const { userID } = useParams();
  useEffect(() => {
    dispatch(setFetchingStatus(true));
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        dispatch(setUserProfile(response.data));
        dispatch(setFetchingStatus(false));
      });
  }, [dispatch, userID]);

  if (isFetching) {
    return <LoaderComponent />;
  } else {
    return <ProfilePage profile={profile} />;
  }
};

export default ProfilePageContainer;
