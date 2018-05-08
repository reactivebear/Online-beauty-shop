import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';

export default class DownloadAppButtonSmall extends Component {
    render() {
        return (
            <Nav pullRight className="download-app-button d-none d-sm-block">
                <NavItem key={1} href="#">
                    <Button type="button" className="btn btn-sm btn-success btn-app" bsSize="xs"><i className="fa fa-mobile" aria-hidden="false"></i> Baixe grátis o app do Visual Total</Button>
                </NavItem>
            </Nav>
        );
    }
}