import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = (props) => {
  const redirectTo = props.link
  const errorMessage = props.errorMessage
  return (
    <div>
      Page Not Found
      <Link to={redirectTo}>{errorMessage}</Link>
    </div>
  );
};

export default NotFoundPage;