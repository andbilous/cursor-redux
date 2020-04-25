import React from 'react';
import {connect}


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
    addPost: () => dispatch(addPost()),
    // goToContactsPage: () => dispatch(goToContactsPage()),
    // setChatId: (id) => dispatch(setChatId(id)),
    // goToMessagesPage: () => dispatch(goToMessagesPage()),
    // loadMessages: (items) => dispatch(loadMessages(items))
  })
)(FormContainer);
export { PostsContainer as Posts};

export default Posts;


