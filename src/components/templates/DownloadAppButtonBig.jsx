import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';

export default class DownloadAppButtonSmall extends Component {
    render() {
        return (
            // <Nav className="download-app-button-big " style={{display: "none"}}>
            <Nav className="download-app-button-big d-block d-sm-none">
                <NavItem>
                    <h2>
                        Use grátis o app do VisualTotal!
                    </h2>
                </NavItem>
                <NavItem>
                    <p>
                        Descubra a melhor experiência na hora de comprar pela internet
                    </p>
                </NavItem>
                <NavItem eventKey={1} href="#">
                    <Button type="button" className="btn btn-sm btn-success btn-app" bsSize="xs"><i className="fa fa-mobile" aria-hidden="false"></i> Baixar</Button>
                </NavItem>
            </Nav>
        );
    }
}