import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {addPost} from '../redux/posts/actions';

const FormContainer = (props) => {
  const [text,setText]=useState('');
  const [link,setLink]=useState('');
  const [author,setAuthor]=useState('');
  return (
    <Form>
    <FormGroup row style={style.row}>
      <Label for="exampleEmail" sm={2} size="lg">Post Text</Label>
      <Col sm={10}>
        <Input onChange={(text) => setText(text)} type="text" name="text" id="postText" placeholder="Post text" bsSize="lg" />
      </Col>
    </FormGroup>
    <FormGroup row style={style.row}>
      <Label for="exampleEmail2" sm={2}>Post Link</Label>
      <Col sm={10}>
      <Input onChange={(e) => setLink(text)}
       type="text" name="link" id="postLink" placeholder="Post link" bsSize="lg" />
      </Col>
    </FormGroup>
    <FormGroup style={style.row}>
        <Label for="exampleCustomSelect">Author</Label>
        <Input onChange={(e) => setAuthor(e.target.value)} type="select" id="exampleCustomSelect" name="customSelect">
          <option value='@dart_vader1'>@dart_vader1</option>
          <option value='@dart_vader2'>@dart_vader2</option>
          <option value='@dart_vader3'>@dart_vader3</option>
        </Input>
      </FormGroup>
      <Button 
        onClick={()=>{
          props.addPost(
            {
              name:author,
              photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
              nickname: author,
              content:text,
              date:new Date().toString,
              image:link
            }
          )
        }}
      color="primary">Create Post</Button>
  </Form>)
}

const style={
  row:{
    marginTop: '30px'
  }
}

const FormContainerRedux = connect(
  (state) => ({
    posts: state.postsReducer.posts,
  }), (dispatch) => ({
    addPost: (post) => dispatch(addPost(post)),
    // goToContactsPage: () => dispatch(goToContactsPage()),
    // setChatId: (id) => dispatch(setChatId(id)),
    // goToMessagesPage: () => dispatch(goToMessagesPage()),
    // loadMessages: (items) => dispatch(loadMessages(items))
  })
)(FormContainer);
export { FormContainerRedux as Form };
