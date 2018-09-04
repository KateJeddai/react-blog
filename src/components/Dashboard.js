import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';
import PostFilters from './PostFilters';

export const Dashboard = () => (
    <div>
        <p>test</p>
        <Link to="/add" className="button">Add Post</Link>
        <PostFilters />
        <PostsList />
    </div>  
);
