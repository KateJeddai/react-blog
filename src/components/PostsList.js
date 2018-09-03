import React from 'react';
import { connect } from 'react-redux';
//import { PostItem } from './PostItem';

const PostsList = (props) => {
   console.log(props.posts);
   return(
    <div>
       {props.posts.length > 0 && props.posts.map(post => {
            return(
               <div key={post.title}>
                 <h2>{post.title}</h2>
                 <p>{post.time}</p>
                 <p>{post.text}</p>
               </div>
            );
        })} 
    </div>
   )    
};

const mapStateToProps = (state) => ({
        posts: state.postReducer.posts
});


export default connect(mapStateToProps)(PostsList);
 