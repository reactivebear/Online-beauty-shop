import React, {Component} from 'react';
import {Button, Image, Panel} from 'react-bootstrap';

export default class CatalogCard extends Component {
    render () {
        return (
            <div className="catalog-card">
                <Button>
                    <Panel className="card-frame">
                        <Panel.Body>
                            <div className="catalog-icon-holder">
                                <Image src="assets/icons/star.png" />
                            </div>
                            <div className="catalog-title">
                                <h4>Esthetic Clinics</h4>
                            </div>
                        </Panel.Body>
                    </Panel>
                </Button>
            </div>
        )
    }
}