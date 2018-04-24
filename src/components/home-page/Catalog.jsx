import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import CatalogCard from "../templates/CatalogCard";

import { Api } from "../../api/api.js";

export default class Catalog extends Component {

    constructor (props) {
        super(props);
        this.state = {
            catalogs: [
                // { id: 1, name: "Hairtylist & Makeup", image_url: "assets/icons/star.png"},
                // { id: 2, name: "Barber", image_url: "assets/icons/heart.png" },
                // { id: 3, name: "Depilation", image_url: "assets/icons/star.png" },
                // { id: 4, name: "Esthetic Clinics", image_url: "assets/icons/heart.png" },
                // { id: 5, name: "Spa & Massage", image_url: "assets/icons/star.png" }
            ]
        }
    }

    componentDidMount() {
        this.catalogsID = setInterval(
            () => this.fetchProductCategories(),
            //1000
            60000
        );
    }

    //take all product catalogs and send that information to a list of product catalogs
    fetchProductCategories() {
        Api.getProductCategories()
            .then(res => {
                this.setState({
                    catalogs: res.data.object
                });
                console.log(JSON.stringify(res.data.object, null, 4));
            });
    }

    componentDidUpdate() {
        clearInterval(this.catalogsID);
    }

    componentWillUnmount() {
        clearInterval(this.catalogsID);
    }

    render () {
        return (
            <section className="catalog-section">
                 <Col xs={12} sm={6} md={12} className="person-wrapper col-xs-12 col-sm-6 col-md-12">
                     <div className="section-heading text-left">
                         <h3>Catálogo de <strong>produtos</strong></h3>
                     </div>
                     <Row className="show-grid catalog-list">
                        <Col xs={12} sm={4} md={3} className="person-wrapper col-xs-12 col-sm-4 col-md-3">
                            <CatalogCard
                                catalogs={this.state.catalogs}>
                            </CatalogCard>
                        </Col>
                     </Row>
                 </Col>
             </section>
        );
    }
}