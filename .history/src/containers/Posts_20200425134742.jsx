import React from 'react';
import {connect} from 'redux';


const Posts = () =>{
  return (
    <div>

    </div>
  )
}
const PostsContainer = connect(
  (state) => ({
    posts: state.postsReducer.posts,
  }), (dispatch) => ({
  })
)(FormContainer);
export { PostsContainer as Posts};

export default Posts;


