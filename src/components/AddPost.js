import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { addPost } from '../actions/postReducer';

class AddPost extends React.Component{
    handleSubmit = (post) => {
        console.log(post);
        this.props.addPost(post);
        this.props.history.push('/');
    };
    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit} />
            </div>
        )
    }
}
    

const mapDispatchToProps = (dispatch) => ({
        addPost: (post) => dispatch(addPost(post))
    });


export default connect(undefined, mapDispatchToProps)(AddPost);
