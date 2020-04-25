import React from 'react';
import {connect} from 'redux';
import Post from '../components/Post';


const Posts = (props) =>{
  return (
    <div>
      {props.posts.map(post=>(
         name:'Anakin skywalker1',
         photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
         nickname: "@dart_vader1",
         content:"WTF? Who is Ray? Why she is Skywalker1? Luke...?",
         date:"22 февр.",
         image:'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'
        <Post
        name={post.name}
        
        nickname={post.nickname}
        date={post.date},
        content={post.content}
        image={post.image}
        />

    
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

export default Posts;


