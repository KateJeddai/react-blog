import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss';

export const Header = () => (
    <div className="header">
      <div className="container">
        <Link className="header-link" to="/">
            <h1>My Blog</h1>
        </Link>
      </div>  
    </div>
);