import React from 'react';
import { Col, Form, FormGroup, Label, Input,CustomInput } from 'reactstrap';

const FormContainer = () => {
  return (
    <Form>
    <FormGroup row style={style.row}>
      <Label for="exampleEmail" sm={2} size="lg">Post Text</Label>
      <Col sm={10}>
        <Input type="text" name="text" id="postText" placeholder="Post text" bsSize="lg" />
      </Col>
    </FormGroup>
    <FormGroup row style={style.row}>
      <Label for="exampleEmail2" sm={2}>Post Link</Label>
      <Col sm={10}>
      <Input type="text" name="link" id="postLink" placeholder="Post link" bsSize="lg" />
      </Col>
    </FormGroup>
    <FormGroup style={style.row}>
        <Label for="exampleCustomSelect">Author</Label>
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option>@dart_vader1</option>
          <option>@dart_vader1</option>
          <option>@dart_vader1</option>
        </CustomInput>
      </FormGroup>
  </Form>)
}

const style={
  row:{
    marginTop: '30px'
  }
}

export default FormContainer;