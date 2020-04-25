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
        name={}


        <div style={styles.container}>
    <section style={styles.header}>
      <img style={styles.logo} src={props.author.photo}/>
      <div style={styles.userContent}>
        <div style={styles.title}>
          <span style={styles.name}>{props.name}</span>
          <span>{props.author.nickname}</span>
          <i className="fa fa-check"></i>
        <span>{props.date}</span>
          </div>
        <p style={styles.content}>{props.content}</p>
        <img src={props.image} style={styles.image}/>
        </div>
    </section>
    </div>
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


