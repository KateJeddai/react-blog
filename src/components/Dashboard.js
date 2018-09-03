import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';
import PostsFilters from './PostsFilters';

export const Dashboard = () => (
    <div>
        <p>test</p>
        <Link to="/add" className="button">Add Post</Link>
        <PostsFilters />
        <PostsList />
    </div>  
);
