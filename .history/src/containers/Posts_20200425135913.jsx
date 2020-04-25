import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';


const Posts = (props) =>{
  return (
    <div>
      {props.posts.map((post,i)=>(
        <Post
        key
        name={post.name}
        photo={post.photo}
        nickname={post.nickname}
        date={post.date}
        content={post.content}
        image={post.image}
        />
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


