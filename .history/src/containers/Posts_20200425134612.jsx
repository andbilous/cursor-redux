import React from 'react';


const Posts = () =>{
  return (
    <div>

    </div>
  )
}
const Posts = connect(
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
export { FormContainerRedux as Form };

export default Posts;


