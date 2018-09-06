import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';
import PostFilters from './PostFilters';
import '../css/dashboard.scss';

export const Dashboard = () => (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-btns">
          <Link to="/add" className="button btn-add-post">Add Post</Link>
          <PostFilters />
        </div>  
        <PostsList />
      </div>  
    </div>  
);
