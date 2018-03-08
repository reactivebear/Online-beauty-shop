import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import {Grid, Row,Carousel} from 'react-bootstrap';
import ProdutosInspirados from './home-page/ProdutosInspirados.jsx';
import Produtosemdestaque from './home-page/Produtosemdestaque.jsx';
import Blog from './home-page/Blog.jsx';
import Reviews from './home-page/Reviews.jsx';

import './Home.css';
export default class Home extends Component {
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
      <Grid>
        <Row>
          <ProdutosInspirados />
        </Row>
        <Row>
          <Produtosemdestaque />
        </Row>
        <Row>
          <Blog />
        </Row>
        <Row>
          <Reviews />
        </Row>
      </Grid>
      </div>
    )
  }
}
