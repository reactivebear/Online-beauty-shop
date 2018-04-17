import React, { Component } from 'react'
import { Row, Col, ButtonGroup } from 'react-bootstrap';
import CatalogCard from "../templates/CatalogCard";

export default class Catalog extends Component {

    constructor (props) {
        super(props);
        this.state = {
            catalogs: [
                { catalogId: 1, catalogTitle: "Hairstylist", catalogImg: "assets/icons/star.png" },
                { catalogId: 2, catalogTitle: "Barber", catalogImg: "assets/icons/star.png" },
                { catalogId: 3, catalogTitle: "Nails", catalogImg: "assets/icons/star.png" },
                { catalogId: 4, catalogTitle: "Depilation", catalogImg: "assets/icons/star.png" },
                { catalogId: 5, catalogTitle: "Massage", catalogImg: "assets/icons/star.png" },
                { catalogId: 6, catalogTitle: "Esthetic Clinics", catalogImg: "assets/icons/star.png" },
            ]
        }
    }

    render () {
        return (
            <section className="catalog-section">
                 <Col sm={12} className="person-wrapper">
                     <div className="section-heading text-left">
                         <h3>Catálogo de <strong>produtos</strong></h3>
                     </div>
                     <Row className="show-grid catalog-list">
                         <ButtonGroup>
                             <Col xs={6} sm={3} className="person-wrapper">
                                 <CatalogCard
                                 catalogs={this.state.catalogs}>
                                 </CatalogCard>
                             </Col>
                         </ButtonGroup>
                     </Row>
                 </Col>
             </section>
        );
    }
}