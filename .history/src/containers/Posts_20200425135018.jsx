import React from 'react';
import {connect} from 'redux';
import Post from '../components/Post';


const Posts = (props) =>{
  return (
    <div>
      {props.posts.map(post=>(
        <Post
      ))}
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


