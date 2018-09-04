import uuid from 'uuid';

const uuidv1 = require('uuid/v1');

export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: {
        id: uuidv1(),
        title: post.title,
        text: post.text,
        time: post.time
    }
});
