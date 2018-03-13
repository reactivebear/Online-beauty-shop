import React, { Component } from 'react'
import {Form,FormGroup,FormControl,Button} from 'react-bootstrap';
export default class Addzip extends Component{
  render() {
    return (
        <Form  inline className="zip-form">
          <div className="arowForToltip"></div>
          <FormGroup controlId="formInlineName" className="f1">
            <FormControl type="text" placeholder="04850" />
          </FormGroup>
          <FormGroup controlId="formInlineEmail" className="f2">
            <FormControl type="text" placeholder="" />
          </FormGroup>
          <Button className="f3 sendBtn" type="submit">Buscar</Button>
        </Form>
    );
  }
}
