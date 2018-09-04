import React from 'react';
import { connect } from 'react-redux';
import { PostItem } from './PostItem';
import sortPosts from '../selectors/sortPosts';

const PostsList = (props) => {
   console.log(props.posts);
   return(
    <div>
       {props.posts.length > 0 && props.posts.map(post => (
               <div key={post.title}>
                 <PostItem title={post.title} time={post.time} text={post.text} />
               </div>
            )
       )} 
    </div>
   )    
};


const mapStateToProps = (state) => ({
        posts: sortPosts(state.postReducer.posts, state.filterReducer)
});


export default connect(mapStateToProps)(PostsList);
 