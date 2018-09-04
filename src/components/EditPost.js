import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';


const EditPost = (props) => {
    console.log(props.match.params.id);
    return(
        <div>
          <h1>Edit Post</h1>
          <Form post={props.post} />
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    post: state.postReducer.posts.find((post) => post.id === props.match.params.id)
});


 export default connect(mapStateToProps)(EditPost);