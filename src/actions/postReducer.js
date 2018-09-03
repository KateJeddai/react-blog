export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: {
        title: post.title,
        text: post.text,
        time: post.time
    }
});
