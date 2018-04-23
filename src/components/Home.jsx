import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import {Grid, Row,Carousel} from 'react-bootstrap';
import FilterButton from './home-page/FilterButton.jsx';
import Catalog from './home-page/Catalog.jsx';
import CatalogService from './home-page/CatalogService.jsx';
//import ProdutosInspirados from './home-page/ProdutosInspirados.jsx';
import ProductsFeatured from './home-page/ProductsFeatured.jsx';
import ServicesFeatured from './home-page/ServicesFeatured.jsx';
import Reviews from './home-page/Reviews.jsx';
import Blog from './home-page/Blog.jsx';
import Appstore from './home-page/Appstore.jsx';

import { StorageKeys } from "../utils/storagekeys.js";
import { Api } from "../api/api.js";

import './Home.css';

export default class Home extends Component {

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
            <FilterButton></FilterButton>
          </Row>
          <Row className="catalog catalog-product">
            <Catalog/>
          </Row>
          <Row className="produtosemdestaque">
            <ProductsFeatured />
          </Row>
          <Row className="catalog catalog-service">
            <CatalogService />
          </Row>
          <Row>
            <ServicesFeatured />
          </Row>
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
