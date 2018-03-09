import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col,Glyphicon,Image,Panel} from 'react-bootstrap';

export default class Servicos extends Component {
  render() {
    return (
      <section className="reviews-section">
        <Col sm={12} className="col-wrapper">
          <div className="section-heading text-left">
            <h3>Serviços em destaque</h3>
          </div>
          <Row className="show-grid">
            <Col xs={12} sm={12} className="service-wrapper person-wrapper ">
              <div className="content-sec">
                  <div className="service">
                    <div className="img-holder">
                      <Image src="assets/images/s2.jpg" />
                    </div>
                    <div className="s-detail-holder">
                      <div className="sr-heading review-rating">
                        <h2>Instituto de Laser</h2>
                        <div className="stars">
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                        </div>
                      </div>
                      <div className="sr-detail">
                        <p>R. Min Gabriel Rezende Passos, 309 - Moema Pássaros, Sao Paulo.</p>
                      </div>
                      <div className="s-catgories">
                        <div className="tag">Hair</div>
                        <div className="tag">Make up</div>
                        <div className="tag">Wedding</div>
                      </div>
                      <div className="more-detail">
                        <Panel id="panel1">
                          <Panel.Heading>
                            <Panel.Title>Lorem Ipsum is simply dummy text</Panel.Title>
                            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
                          </Panel.Heading>
                          <Panel.Collapse>
                            <Panel.Body>
                              Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry richardson ad squid. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred nesciunt sapiente
                              ea proident.
                            </Panel.Body>
                          </Panel.Collapse>
                        </Panel>
                      </div>
                    </div>
                  </div>
                  <div className="service">
                    <div className="img-holder">
                      <Image src="assets/images/s1.jpg" />
                    </div>
                    <div className="s-detail-holder ">
                      <div className="sr-heading review-rating">
                        <h2>Instituto de Laser</h2>
                        <div className="stars">
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                        </div>
                      </div>
                      <div className="sr-detail">
                        <p>R. Min Gabriel Rezende Passos, 309 - Moema Pássaros, Sao Paulo.</p>
                      </div>
                      <div className="s-catgories">
                        <div className="tag">Hair</div>
                        <div className="tag">Make up</div>
                        <div className="tag">Wedding</div>
                      </div>
                      <div className="more-detail">
                        <Panel id="panel1">
                          <Panel.Heading>
                            <Panel.Title>Lorem Ipsum is simply dummy text</Panel.Title>
                            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
                          </Panel.Heading>
                          <Panel.Collapse>
                            <Panel.Body>
                              Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry richardson ad squid. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred nesciunt sapiente
                              ea proident.
                            </Panel.Body>
                          </Panel.Collapse>
                        </Panel>
                      </div>
                    </div>
                  </div>
                  <div className="service">
                    <div className="img-holder">
                      <Image src="assets/images/s3.jpg" />
                    </div>
                    <div className="s-detail-holder ">
                      <div className="sr-heading review-rating">
                        <h2>Instituto de Laser</h2>
                        <div className="stars">
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                          <Glyphicon glyph="star-empty" />
                        </div>
                      </div>
                      <div className="sr-detail">
                        <p>R. Min Gabriel Rezende Passos, 309 - Moema Pássaros, Sao Paulo.</p>
                      </div>
                      <div className="s-catgories">
                        <div className="tag">Hair</div>
                        <div className="tag">Make up</div>
                        <div className="tag">Wedding</div>
                      </div>
                      <div className="more-detail">
                        <Panel id="panel1">
                          <Panel.Heading>
                            <Panel.Title>Lorem Ipsum is simply dummy text</Panel.Title>
                            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
                          </Panel.Heading>
                          <Panel.Collapse>
                            <Panel.Body>
                              Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry richardson ad squid. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred nesciunt sapiente
                              ea proident.
                            </Panel.Body>
                          </Panel.Collapse>
                        </Panel>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>
          </Row>
        </Col>
      </section>
    )
  }
}
