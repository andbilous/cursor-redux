import React from 'react';
import {connect} from 'redux';
import 


const Posts = () =>{
  return (
    <div>

    </div>
  )
}
const PostsContainer = connect(
  (state) => ({
    posts: state.postsReducer.posts,
  }), (dispatch) => ({})
)(Posts);
export { PostsContainer as Posts};

export default Posts;


