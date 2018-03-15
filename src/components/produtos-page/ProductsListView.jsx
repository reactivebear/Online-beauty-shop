import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import {  Col,Image,Pagination} from 'react-bootstrap';

export default class ProductsListView extends Component {
  render() {
    var Produtos=[];

    for (var i=0; i<6; i++) {
        Produtos.push(
          <div key={i} className="list-product">
            <div className="product-img-holder">
              <Image src="assets/images/list-product-image.jpg" />
            </div>
            <div className="product-detail-holder">
                <h3>Chromecast 2 Hdmi Edição 2017 Original 1080p Google New</h3>
                <div className="old-price">R$ 229</div>
                <div className="intrest-free">
                    <div><span className="icon credit-card-green"></span> 12x R$ 17 sem juros</div>
                    <div className="product-reviews">
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <span className="star-sm fill"></span>
                      <label>9551</label>
                    </div>
                </div>
                <div className="add-wishlet"><span className="icon heart-green"></span> Adicionar a lista de desejos</div>
            </div>
          </div>
        );
    }

    return (
      <section className="productListView">
      <Col sm={12} className="person-wrapper">
        <div className="content-sec">
          {Produtos}
        </div>
        <div className="text-center">
          <Pagination>
            <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </Col>
      </section>
    )
  }
}
