import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Row, Col,FormGroup,FormControl,Button,Image,DropdownButton,MenuItem,Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import Headerlogin from '../tooltips/Headerlogin.jsx';
import Adicionar from '../tooltips/Adicionar-cep.jsx';
import Carttooltip from '../tooltips/Carttooltip.jsx';
export default class CustomNavbar extends Component {

  render() {
    return (
      <div className="header-nav">
        <Navbar default collapseOnSelect  className="main-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><Image src="assets/images/LogoVisualTotal.png"  className="logo"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight className="download-app-button">
            <NavItem eventKey={1} href="#">
              <Button type="button" className="btn btn-sm btn-success"><i className="fa fa-mobile" aria-hidden="false"></i> Baixe grátis o app do Visual Total</Button>
              </NavItem>
          </Nav>
          <Navbar.Collapse>
            <Row className="navbar-ul">
              <Nav  className="main-ul">
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                  Hairtylist & Makeup
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                  Barber
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                  Depilation
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                  Esthetic Clinics
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                  Spa & Massage
                </NavItem>
              </Nav>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={9} className="navbar-left-section">
                <div className="searchbar hidden-xs">
                  <DropdownButton id="navdrop-dropdown" title="Todo" className="searchbarDropDown">
                     <MenuItem eventKey="1">Action</MenuItem>
                     <MenuItem eventKey="2">Another action</MenuItem>
                     <MenuItem eventKey="3" active>
                       Active Item
                     </MenuItem>
                     <MenuItem divider />
                     <MenuItem eventKey="4">Separated link</MenuItem>
                   </DropdownButton>
                  <Navbar.Form pullLeft>
                    <FormGroup>
                      <FormControl type="text" placeholder="Buscar por produtos e serviços" />
                    </FormGroup>{' '}
                    <Button type="submit" className="btn btn-success"><Glyphicon glyph="search" /></Button>
                  </Navbar.Form>
                </div>
              </Col>
              <Col xs={6} md={3} className="navbar-right-section hidden-xs">
                <Row className="show-grid">
                  <Col xs={4}>
                    <div className="navbar-side location-div nbs">
                      <Adicionar />
                      <p>Enviar para</p>
                      <p><strong>Bela Vista 01329900</strong></p>
                    </div>
                  </Col>
                  <Col xs={5} md={5}>
                    <div className="navbar-side-cart nbs">
                      <Carttooltip />
                      <div className="navbar-side">
                        <p>Meu</p>
                        <p><strong>Carrinho</strong></p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={7} md={7}>
                    <div className="navbar-side nbs">
                      <p>Bem vindo</p>
                      <Headerlogin />
                    </div>
                  </Col>
              </Row>
              </Col>
            </Row>
          </Navbar.Collapse>


          <div className="searchbar hidden-lg hidden-sm hidden-md">
            <DropdownButton id="navdrop-dropdown" title="Todo" className="searchbarDropDown">
               <MenuItem eventKey="1">Action</MenuItem>
               <MenuItem eventKey="2">Another action</MenuItem>
               <MenuItem eventKey="3" active>
                 Active Item
               </MenuItem>
               <MenuItem divider />
               <MenuItem eventKey="4">Separated link</MenuItem>
             </DropdownButton>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Buscar por produtos e serviços" />
              </FormGroup>{' '}
              <Button type="submit" className="btn btn-success"><Glyphicon glyph="search" /></Button>
            </Navbar.Form>
          </div>
          <div className="hidden-lg hidden-sm hidden-md sub-header">
            <Row className="show-grid ">
              <Col xs={12}>
                <Row className="show-grid divs">
                    <Col xs={4}>
                      <div className="navbar-side location-div">
                      <Adicionar />
                        <p>Enviar para</p>
                        <p><strong>Bela Vista 01329900</strong></p>
                      </div>
                    </Col>
                  <Col xs={3}>
                    <div className="navbar-side">
                      <p>Encontre por</p>
                      <p><strong>Produtos &nbsp; Serviços</strong></p>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div className="navbar-side-cart">
                      <Carttooltip />
                      <div className="navbar-side">
                        <p>Meu</p>
                        <p><strong>Carrinho</strong></p>
                      </div>
                    </div>
                  </Col>
                <Col xs={3} >
                  <div className="navbar-side">
                    <p>Olá. Faça seu login</p>
                    <Headerlogin />
                  </div>
                </Col>

                </Row>
              </Col>
            </Row>
          </div>
        </Navbar>
      </div>
    )
  }
}
