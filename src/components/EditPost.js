import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { editPost, removePost } from '../actions/postReducer';


const EditPost = (props) => {
    const handleSubmit = (updates) => {
        props.editPost(props.post.id, updates);
        props.history.push('/');
    }
    const handleRemove = () => {
        props.removePost(props.post.id);
        props.history.push('/');
    };
    return(
        <div>
          <h1>Edit Post</h1>
          <Form post={props.post} onSubmit={handleSubmit} />
          <button post={props.post} onClick={handleRemove}>Remove post</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
     post: state.postReducer.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
     editPost: (id, updates) => dispatch(editPost(id, updates)),
     removePost: (id) => dispatch(removePost(id))
});


 export default connect(mapStateToProps, mapDispatchToProps)(EditPost);