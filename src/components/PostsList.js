import React from 'react';
import { connect } from 'react-redux';
import { PostItem } from './PostItem';
import sortPosts from '../selectors/sortPosts';

const PostsList = (props) => {
   let posts = props.posts;
       posts = posts.sort((a, b) => {
        if(props.sortBy === 'name'){
          return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
        }   
         else if(props.sortBy === 'date'){
          return a.time > b.time ? 1 : -1;
        }
       });
       console.log(posts);
   return(
    <div>
       {posts.length > 0 && posts.map(post => (
               <div key={post.title}>
                 <PostItem title={post.title} time={post.time} text={post.text} id={post.id} />
               </div>
            )
       )} 
    </div>
   )    
};


const mapStateToProps = (state) => ({
        posts: state.postReducer.posts,
        sortBy: state.filterReducer.sortBy
});


export default connect(mapStateToProps)(PostsList);
 