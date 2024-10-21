import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPrevLocation } from '../state/AuthReducer';

export const WithAuthRedirect = (Component) => {
  const AuthRedirectComponent: function = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    useEffect(() => {
      dispatch(setPrevLocation(location.pathname));
      if (!isAuth) {
        navigate('/login');
      }
    }, [isAuth, navigate, dispatch, location.pathname]);
    return isAuth ? <Component {...props} /> : null;
  };
  return AuthRedirectComponent;
};
