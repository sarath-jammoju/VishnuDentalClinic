import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-home-button">
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
