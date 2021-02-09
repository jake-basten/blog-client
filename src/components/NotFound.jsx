import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/blog/blog1">To Sample Blog</Link>
    </div>
  );
}

export default NotFound;