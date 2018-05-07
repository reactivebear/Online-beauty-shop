import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import {Col, Grid, Row,Carousel} from 'react-bootstrap';
// import FilterButton from './home-page/FilterButton.jsx';
//import ProdutosInspirados from './home-page/ProdutosInspirados.jsx';
import ProductSection from './templates/ProductSection.jsx';
import ServiceSection from './templates/ServiceSection.jsx';
// import Blog from './home-page/Blog.jsx';
import BlogpostsFeatured from './home-page/BlogpostsFeatured';
// import Reviews from './home-page/Reviews.jsx';
import ReviewsFeatured from './home-page/ReviewsFeatured';
import Appstore from './home-page/Appstore.jsx';

import { StorageKeys } from "../utils/storagekeys.js";

import ReactCarousel from "react-carousel";

import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {psorder: true};

    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleServiceClick = this.handleServiceClick.bind(this);
  }

  componentDidMount() {
    // console.log(localStorage.getItem(StorageKeys.APIKEY));
  }

  handleProductClick () {
    this.setState(
      { psorder: true }
    );
  }
  handleServiceClick() {
    this.setState(
      { psorder: false }
    );
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
              <Col className="person-wrapper">
                <Row className="filter-button-row">
                  
                  {this.state.psorder ?
                    <div className="filter-button-holder btn-green">
                      <button type="button" className="filter-button-product btn-sm btn btn-green"
                      onClick={this.handleProductClick}>Produtos</button>
                    </div>
                    :
                    <div className="filter-button-holder btn-white">
                      <button type="button" className ="filter-button-product btn-sm btn btn-white"    
                      onClick={this.handleProductClick}>Produtos</button>
                    </div>
                  }
                  {this.state.psorder ?
                    <div className="filter-button-holder btn-white">
                      <button type="button" className = "filter-button-service btn-sm btn btn-white"
                      onClick={this.handleServiceClick}>Serviços</button>
                    </div>
                    :
                    <div className="filter-button-holder btn-green">
                      <button type="button" className="filter-button-service btn-sm btn btn-green"
                      onClick={this.handleServiceClick}>Serviços</button>
                    </div>
                  }
                </Row>
              </Col>
            </section>
          </Row>

          {this.state.psorder ?
          <section className="featured-section">
            <ProductSection />
            <ServiceSection />
            <section className="blog-section">
              <BlogpostsFeatured />
            </section>
            <section className="review-section">
              <ReviewsFeatured />
            </section>
          </section>
          :
          <section className="featured-section">
            <ServiceSection />
            <ProductSection />
            <section className="blog-section">
                <BlogpostsFeatured />
            </section>
            <section className="review-section">
                <ReviewsFeatured />
            </section>
          </section>}

          <Row>
            <ReactCarousel>
              <img key={1} src="assets/person-1.jpg" />
              <img key={2} src="assets/person-2.jpg" />
              <img key={3} src="assets/person-3.jpg" />
            </ReactCarousel>
          </Row>

          <Row className="appstore">
            <Appstore/>
          </Row>
        </Grid>
      </div>
    )
  }
}
