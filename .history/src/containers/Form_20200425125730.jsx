import React from 'react';
import { Col, Form, FormGroup, Label, Input,CustomInput } from 'reactstrap';

const FormContainer = () => {
  return (
    <Form>
    <FormGroup row>
      <Label for="exampleEmail" sm={2} size="lg">Post Text</Label>
      <Col sm={10}>
        <Input type="text" name="text" id="postText" placeholder="Post text" bsSize="lg" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail2" sm={2}>Post Link</Label>
      <Col sm={10}>
      <Input type="text" name="link" id="postLink" placeholder="Post link" bsSize="lg" />
      </Col>
    </FormGroup>
    <FormGroup>
        <Label for="exampleCustomSelect">A</Label>
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select</option>
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
          <option>Value 4</option>
          <option>Value 5</option>
        </CustomInput>
      </FormGroup>
  </Form>)
}

export default FormContainer;