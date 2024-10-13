import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const WithAuthRedirect = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.isAuth);
    useEffect(() => {
      if (!auth) {
        navigate('/login');
      }
    }, [auth, navigate]);

    return <Component {...props} />;
  };
};
