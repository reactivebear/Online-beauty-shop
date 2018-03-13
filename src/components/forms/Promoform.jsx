import React, { Component } from 'react'
import {Form,FormGroup,FormControl,Button} from 'react-bootstrap';
export default class Promoform extends Component{
  render() {
    return (
        <Form  inline className="promo-form">
          <FormGroup controlId="formPromo" className="f1">
            <div className="phonecode"><div className="flag"></div><span>[+55]</span></div>
            <FormControl type="text" placeholder="Código de área + número" />
          </FormGroup>
          <Button className="f3 sendBtn" type="submit">Enviar</Button>
        </Form>
    );
  }
}
