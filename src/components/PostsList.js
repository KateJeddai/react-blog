import React from 'react';
import { connect } from 'react-redux';
import { PostItem } from './PostItem';

const PostsList = (props) => {
    let posts = props.posts;
    console.log(props.img);
      if(posts.length > 0){
        posts = posts.sort((a, b) => {
         if(props.sortBy === 'name'){
            return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
         }   
          else if(props.sortBy === 'date'){
            return a.time > b.time ? 1 : -1;
         }
        });
      }
   return(
    <div className="posts-list">
       {posts.length > 0 && posts.map(post => (
               <div key={post.title}>
                 <PostItem title={post.title} time={post.time} text={post.text} id={post.id} img={post.img} />
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

