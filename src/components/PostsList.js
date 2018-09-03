import React from 'react';
import { connect } from 'react-redux';
import { PostItem } from './PostItem';
import selectPosts from '../selectors/selectPosts';

const PostsList = (props) => {
   console.log(props.posts);
   return(
    <div>
       {props.posts.length > 0 && props.posts.map(post => {
            return(
               <div key={post.title}>
                 <PostItem title={post.title} time={post.time} text={post.text} />
               </div>
            );
        })} 
    </div>
   )    
};

const mapStateToProps = (state) => ({
        posts: selectPosts(state.postReducer.posts, state.filterReducer)
});


export default connect(mapStateToProps)(PostsList);
 