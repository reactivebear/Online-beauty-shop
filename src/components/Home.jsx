import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {Grid, Row,Carousel} from 'react-bootstrap';
import ProdutosInspirados from './home-page/ProdutosInspirados.jsx';
import Produtosemdestaque from './home-page/Produtosemdestaque.jsx';
import Blog from './home-page/Blog.jsx';
import Reviews from './home-page/Reviews.jsx';
import Servicos from './home-page/Servicos.jsx';
import Appstore from './home-page/Appstore.jsx';
import './Home.css';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner_list :[],
    };
  }
  componentDidMount() {
    axios.get(`http://visualtotal.com.br/api/banners`,
    {
      headers: {
        apikey: 'fc5d0fec-6d36-43a4-8ad7-97f9633dc84a',
      }
    })
    .then(res => {
      const banner = res.data.object.map(obj => obj.image);
      const carousel_text= <Carousel.Caption>
              <h1>Hair Dresser</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
            </Carousel.Caption>; 
      const banner_list = banner.map(obj => <Carousel.Item><img width={900} height={445} alt="banner" src={obj.image_url} />{carousel_text}</Carousel.Item>);
      this.setState({banner_list});
      //console.log(res.data.object[0].image.image_url);
    });
  }
  render() {
    return (
      <div className="homePage">
        <div className="banner">
        <Carousel>
          {this.state.banner_list}
          </Carousel>
        </div>
        <Grid className="page-content">
          <Row>
            <ProdutosInspirados />
          </Row>
          <Row className="produtosemdestaque">
            <Produtosemdestaque />
          </Row>
          <Row className="blog">
            <Blog />
          </Row>
          <Row>
            <Servicos />
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
