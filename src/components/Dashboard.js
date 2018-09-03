import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';

export const Dashboard = () => (
    <div>
        <p>test</p>
        <Link to="/add" className="button">Add Post</Link>
        <PostsList />
    </div>  
);
