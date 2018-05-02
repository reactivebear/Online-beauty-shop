import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';

export default class DownloadAppSection extends Component {
    render() {
        return (
            // <Nav className="download-app-button-big " style={{display: "none"}}>
            <section className="download-app-section d-block d-sm-none">
                
                <div className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Use grátis o app do Visual Total</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Descubra a melhor experiência na hora de comprar pela internet</p>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-sm btn-success btn-app" bsSize="xs"><i className="fa fa-mobile" aria-hidden="false"></i> Baixar</Button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Nav>
                    <NavItem>
                        <h2>
                            <strong>Use grátis o app do Visual Total</strong>
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
                </Nav> */}
            </section>
        );
    }
}