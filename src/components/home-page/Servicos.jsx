import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col,Glyphicon,Image,Panel} from 'react-bootstrap';

export default class Servicos extends Component {

constructor() {
    super();
    this.state = {
      services_list :[],
    };
  }

  componentDidMount() {
    
    let data = '';
    axios.post('http://visualtotal.com.br/api/services', data, {
      headers: { apikey: '5612edff-bfae-4919-83ad-e8064b447a49',}
    })
    .then(res => {
      var services_arr = res.data.object.map(obj=>obj);
      //console.log(services_arr);
      const services_list =  services_arr.map(obj => <div className="service" key= {obj.id}>
                    <div className="img-holder">
                      <Image src="assets/images/s2.jpg" />
                    </div>
                    <div className="s-detail-holder">
                      <div className="sr-heading review-rating">
                        <h2>{obj.title}</h2>
                        <div className="stars">
                        </div>
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
                        <div className="tag">{obj.category.name}</div>
                      </div>
                      <div className="more-detail">
                        <Panel id="panel1">
                          <Panel.Heading>
                            <Panel.Title>Lorem Ipsum is simply dummy text</Panel.Title>
                            <Panel.Toggle componentClass="a"><Glyphicon glyph="menu-down"/></Panel.Toggle>
                          </Panel.Heading>
                          <Panel.Collapse>
                            <Panel.Body>
                              {obj.description}
                            </Panel.Body>
                          </Panel.Collapse>
                        </Panel>
                      </div>
                    </div>
                  </div>);

this.setState({services_list});


    });
  }

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
                  {this.state.services_list}
              </div>
            </Col>
          </Row>
        </Col>
      </section>
    )
  }
}
