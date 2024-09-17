import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Page Not Found
      <Link to="/profile">Go back to start page</Link>
    </div>
  );
};

export default NotFoundPage;