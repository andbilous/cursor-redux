import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


const FormContainer = () => {
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
      <Input onChange={(text) => setLink(text)}
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
    addPost: () => dispatch(addPost()),
    // goToContactsPage: () => dispatch(goToContactsPage()),
    // setChatId: (id) => dispatch(setChatId(id)),
    // goToMessagesPage: () => dispatch(goToMessagesPage()),
    // loadMessages: (items) => dispatch(loadMessages(items))
  })
)(FormContainer);
export { FormContainerRedux as Form };
