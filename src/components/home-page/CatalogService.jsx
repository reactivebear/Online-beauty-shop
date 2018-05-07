import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import CatalogCard from "../templates/CatalogCard";

import { Api } from "../../api/api.js";

export default class Catalog extends Component {

    constructor (props) {
        super(props);
        this.state = {
            catalogs: [
                // { id: 1, name: "Face Care", image_url: "assets/icons/star.png"},
                // { id: 2, name: "Fraqnances", image_url: "assets/icons/heart.png" },
                // { id: 3, name: "Nail & Makeup", image_url: "assets/icons/star.png" },
                // { id: 4, name: "Body Care", image_url: "assets/icons/heart.png" },
                // { id: 5, name: "Hair", image_url: "assets/icons/star.png" },
                // { id: 6, name: "Supplement", image_url: "assets/icons/heart.png" }
            ]
        }
    }

    componentDidMount() {
        this.catalogsID = setInterval(
            () => this.fetchServiceCategories(),
            1000
            //60000
        );
    }

    //take all product catalogs and send that information to a list of product catalogs
    fetchServiceCategories() {
        Api.getServiceCategories()
            .then(res => {
                this.setState({
                    catalogs: res.data.object
                });
                // console.log(JSON.stringify(res.data.object, null, 4));
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
                 <Col className="person-wrapper">
                     <div className="section-heading text-left">
                         <h3>Catálogo de <strong>serviços</strong></h3>
                     </div>
                     <Row className="show-grid catalog-list">
                        <Col className="person-wrapper">
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