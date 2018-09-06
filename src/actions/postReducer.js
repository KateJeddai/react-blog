import uuid from 'uuid';

const uuidv1 = require('uuid/v1');

export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: {
        id: uuidv1(),
        title: post.title,
        text: post.text,
        time: post.time,
        file: post.file
    }
});

export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    payload: {
        id,
        title: updates.title,
        text: updates.text,
        time: updates.time
    }    
});

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
})