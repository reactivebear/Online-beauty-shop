import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import CatalogCard from "../templates/CatalogCard";
import { keepToken, getProductCategories } from "../../api/api.js";

export default class Catalog extends Component {

    constructor (props) {
        super(props);
        this.state = {
            catalogs: [
                // { catalogId: 1, catalogTitle: "Hairstylist", catalogImg: "assets/icons/star.png" },
                // { catalogId: 2, catalogTitle: "Barber", catalogImg: "assets/icons/star.png" },
                // { catalogId: 3, catalogTitle: "Nails", catalogImg: "assets/icons/star.png" },
                // { catalogId: 4, catalogTitle: "Depilation", catalogImg: "assets/icons/star.png" },
                // { catalogId: 5, catalogTitle: "Massage", catalogImg: "assets/icons/star.png" },
                // { catalogId: 6, catalogTitle: "Esthetic Clinics", catalogImg: "assets/icons/star.png" }
            ]
        }
    }

    componentDidMount () {
        //pega todas as categorias de produtos e envia essas informações para a lista de catalogs
        this.state.catalogs.push(getProductCategories());
    }

    render () {
        return (
            <section className="catalog-section">
                 <Col xs={12} sm={6} md={4} className="person-wrapper col-xs-12 col-sm-6 col-md-4">
                     <div className="section-heading text-left">
                         <h3>Catálogo de <strong>produtos</strong></h3>
                     </div>
                     <Row className="show-grid catalog-list">
                        <Col xs={12} sm={4} md={3} className="person-wrapper col-xs-12 col-sm-4 col-md-3">
                            <ul>
                                <CatalogCard
                                    catalogs={this.state.catalogs}>
                                </CatalogCard>
                            </ul>
                        </Col>
                     </Row>
                 </Col>
             </section>
        );
    }
}