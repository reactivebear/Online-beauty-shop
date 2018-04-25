import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import {Col, Grid, Row,Carousel} from 'react-bootstrap';
// import FilterButton from './home-page/FilterButton.jsx';
import CatalogProduct from './home-page/CatalogProduct.jsx';
import CatalogService from './home-page/CatalogService.jsx';
//import ProdutosInspirados from './home-page/ProdutosInspirados.jsx';
import ProductsFeatured from './home-page/ProductsFeatured.jsx';
import ServicesFeatured from './home-page/ServicesFeatured.jsx';
import Reviews from './home-page/Reviews.jsx';
import Blog from './home-page/Blog.jsx';
import Appstore from './home-page/Appstore.jsx';

import { StorageKeys } from "../utils/storagekeys.js";

import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.psorder = true;
  }

  componentDidMount() {
    console.log(localStorage.getItem(StorageKeys.APIKEY));
  }

  render() {
    return (
      <div className="homePage">
        <div className="banner">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={445} alt="banner" src="assets/images/banner.png" />
            <Carousel.Caption>
              <h1>Hair Dresser</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={445} alt="banner" src="assets/images/banner.png" />
            <Carousel.Caption>
              <h1>Hair Dresser</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
        <Grid className="page-content">
          <Row className="filter-button-row">
            {/* <FilterButton ></FilterButton> */}
            <section className="filter-button-section">
              <Col sm={12} className="person-wrapper">
                <Row className="filter-button-row">
                  <div className="filter-button-holder btn-green">
                    <button type="button" className="filter-button-product  btn-sm btn" onClick={this.psorder=true}>Produtos</button>
                  </div>
                  <div className="filter-button-holder btn-white">
                    <button type="button" className="filter-button-service btn-sm btn" onClick={this.psorder=false}>Serviços</button>
                  </div>
                </Row>
              </Col>
            </section>
          </Row>
          {!this.psorder?
          <div>
            <section className="product-section">
              <Row className="catalog catalog-product">
                <CatalogProduct />
              </Row>
              <Row className="products-featured">
                <ProductsFeatured />
              </Row>
            </section>
            <section className="service-section">
              <Row className="catalog catalog-service">
                <CatalogService />
              </Row>
              <Row className="services-featured">
                <ServicesFeatured />
              </Row>
            </section>
          </div>
          :
          <div>
            <section className="service-section">
              <Row className="catalog catalog-service">
                <CatalogService />
              </Row>
              <Row className="services-featured">
                <ServicesFeatured />
              </Row>
            </section>
            <section className="product-section">
              <Row className="catalog catalog-product">
                <CatalogProduct />
              </Row>
              <Row className="products-featured">
                <ProductsFeatured />
              </Row>
            </section>
          </div>}
          {/* <div >
            <section className="product-section">
              <Row className="catalog catalog-product">
                <CatalogProduct />
              </Row>
              <Row className="products-featured">
                <ProductsFeatured />
              </Row>
            </section>
            <section className="service-section">
              <Row className="catalog catalog-service">
                <CatalogService />
              </Row>
              <Row className="services-featured">
                <ServicesFeatured />
              </Row>
            </section>
          </div> */}
          <Row className="blog">
            <Blog />
          </Row>
          <Row className="reviews">
            <Reviews />
          </Row>
          <Row className="appstore">
            <Appstore/>
          </Row>
        </Grid>
      </div>
    )
  }
}
