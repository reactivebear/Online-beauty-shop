import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col,Glyphicon} from 'react-bootstrap';

export default class Reviews extends Component {
  render() {
    return (
      <section className="reviews-section">
        <Col sm={12} className="col-wrapper">
          <Row className="show-grid">
            <Col xs={12} sm={12} className="reviews-wrapper person-wrapper ">
              <div className="review">
                <div className="review-heading">
                  <h3>It has been a couple of</h3>
                  <div className="review-author">Tony Stark</div>
                </div>
                <div className="review-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                </div>
                <div className="review-rating text-center">
                  <div className="stars">
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                  </div>
                  <div className="rating-nmbr">4,5</div>
                </div>
              </div>
              <div className="review">
                <div className="review-heading">
                  <h3>Great Service</h3>
                  <div className="review-author">Tony Stark</div>
                </div>
                <div className="review-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                </div>
                <div className="review-rating text-center">
                  <div className="stars">
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                  </div>
                  <div className="rating-nmbr">4,5</div>
                </div>
              </div>
              <div className="review">
                <div className="review-heading">
                  <h3>Amazing support</h3>
                  <div className="review-author">Tony Stark</div>
                </div>
                <div className="review-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                </div>
                <div className="review-rating text-center">
                  <div className="stars">
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                    <Glyphicon glyph="star-empty" />
                  </div>
                  <div className="rating-nmbr">4,5</div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </section>
    )
  }
}
