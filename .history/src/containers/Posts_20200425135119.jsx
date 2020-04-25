import React from 'react';
import {connect} from 'redux';
import Post from '../components/Post';


const Posts = (props) =>{
  return (
    <div>
      {props.posts.map(post=>(
        <Post
        <div style={styles.container}>
    <section style={styles.header}>
      <img style={styles.logo} src={props.author.photo}/>
      <div style={styles.userContent}>
        <div style={styles.title}>
          <span style={styles.name}>{props.author.name}</span>
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


